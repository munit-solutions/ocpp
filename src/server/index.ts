import WebSocket, {Server, ServerOptions} from 'ws';
import Call from '../builder/Call';
import ClientCommand from '../enum/ClientCommand';
import {EventEmitter} from 'events';

export type WSParams = {
  id?: string;
}

export default class OCPPServer extends EventEmitter {
  public ws: Server;

  constructor(options?: ServerOptions, callback?: () => void) {
    super();
    this.ws = new Server(options, callback);
    this.ws.on('connection', (ws, req) => {
      const id = req.url?.substring(1);
      const params: WSParams = {
        id
      }
      ws.on('message', (message) => {
        const msg = new Call();
        msg.parseString(message.toString());
        if (msg.action && Object.values(ClientCommand).includes(msg.action)) {
          this.emit(msg.action, {ws, params, msg});
        }
      });
    });
  }

  on(event: ClientCommand | 'context_error', listener: (this: OCPPServer, {
    ws,
    params,
    msg
  }: { ws: WebSocket, params: WSParams, msg: Call }) => void) {
    return super.on(event, listener);
  }

  once(event: ClientCommand, listener: (this: OCPPServer, {
    ws,
    params,
    msg
  }: { ws: WebSocket, params: WSParams, msg: Call }) => void) {
    return super.once(event, listener);
  }
}
