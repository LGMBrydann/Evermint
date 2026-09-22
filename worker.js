export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({
        ok: true,
        service: 'evermint-scramjet-backend',
        endpoint: 'wss://evermint.pages.dev'
      }), {
        headers: {
          'content-type': 'application/json'
        }
      });
    }

    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected a WebSocket upgrade request.', { status: 426 });
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    server.accept();

    server.addEventListener('message', (event) => {
      server.send(JSON.stringify({
        type: 'ack',
        received: String(event.data),
        service: 'evermint-scramjet-backend'
      }));
    });

    server.send(JSON.stringify({
      type: 'hello',
      service: 'evermint-scramjet-backend',
      protocol: 'scramjet-wisp',
      ready: true
    }));

    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }
};
