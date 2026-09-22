# Evermint WISP relay

This folder contains a local WebSocket relay for development/testing. It exposes a `ws://` endpoint at `/wisp` and can be used as the transport target while the Scramjet browser shell is running locally.

## Run locally

```bash
npm install
npm run start
```

Then the browser can point at:

- `ws://localhost:8765/wisp`

The production target is still configured as:

- `wss://evermint.pages.dev`

## Production deployment notes

The real Scramjet transport is expected to be fronted by a deployment that supports WebSocket upgrades at the target domain. For a Cloudflare deployment, this would typically be a Worker or a custom proxy that upgrades requests to the WISP endpoint and relays traffic to the private Scramjet service.

Use the worker scaffold in the project root for the initial deployment template.
