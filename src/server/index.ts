import WebSocket, {Server, ServerOptions} from 'ws';
import Call from '../builder/Call';
import ClientCommand from '../enum/ClientCommand';
import {EventEmitter} from 'events';
import Message from '../builder/Message';

export type WSParams = {
  id?: string;
  connectorId?: number;
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
        const msg = new Message();
        msg.parseString(message.toString());
        this.emit(msg.action || msg.uniqueId, {ws, params, msg});
      });
    });
  }

  on(event: ClientCommand | 'context_error' | string, listener: (this: OCPPServer, {
    ws,
    params,
    msg
  }: { ws: WebSocket, params: WSParams, msg: Call }) => void) {
    return super.on(event, listener);
  }

  once(event: ClientCommand | 'context_error' | string, listener: (this: OCPPServer, {
    ws,
    params,
    msg
  }: { ws: WebSocket, params: WSParams, msg: Call }) => void) {
    return super.once(event, listener);
  }
}
