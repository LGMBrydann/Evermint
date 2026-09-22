const http = require('http');
const { WebSocketServer, WebSocket } = require('ws');

const PORT = Number(process.env.PORT || 8765);
const ROUTE = '/wisp';

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      ok: true,
      service: 'evermint-wisp-relay',
      route: ROUTE,
      port: PORT,
      ready: true,
      timestamp: new Date().toISOString()
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

const wss = new WebSocketServer({
  noServer: true,
  path: ROUTE,
  clientTracking: true
});

server.on('upgrade', (req, socket, head) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  if (url.pathname !== ROUTE) {
    socket.write('HTTP/1.1 404 Not Found\r\n\r\n');
    socket.destroy();
    return;
  }

  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
  });
});

wss.on('connection', (ws, req) => {
  const clientId = `${req.socket.remoteAddress || 'unknown'}:${req.socket.remotePort || '0'}`;

  console.log(`[evermint] WISP client connected: ${clientId}`);

  ws.send(JSON.stringify({
    type: 'hello',
    service: 'evermint-wisp-relay',
    protocol: 'scramjet-wisp',
    ready: true,
    endpoint: `ws://localhost:${PORT}${ROUTE}`,
    timestamp: new Date().toISOString()
  }));

  ws.on('message', (payload) => {
    const messageText = Buffer.isBuffer(payload) ? payload.toString() : String(payload);

    try {
      const parsed = JSON.parse(messageText);
      if (parsed && parsed.type === 'ping') {
        ws.send(JSON.stringify({ type: 'pong', receivedAt: new Date().toISOString() }));
        return;
      }
    } catch (_) {
      // Ignore non-JSON payloads; keep the relay alive and echo raw data.
    }

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(messageText);
      }
    });

    ws.send(JSON.stringify({
      type: 'ack',
      receivedAt: new Date().toISOString(),
      note: 'Everwmint WISP relay accepted the message.'
    }));
  });

  ws.on('close', () => {
    console.log(`[evermint] WISP client disconnected: ${clientId}`);
  });

  ws.on('error', (error) => {
    console.error('[evermint] WebSocket error:', error.message);
  });
});

server.listen(PORT, () => {
  console.log(`[evermint] WISP relay listening on ws://localhost:${PORT}${ROUTE}`);
  console.log(`[evermint] Health check: http://localhost:${PORT}/health`);
});
