import WebSocket, {Server, ServerOptions} from 'ws';
import Call from '../builder/Call';
import ClientCommand from '../enum/ClientCommand';
import {EventEmitter} from 'events';


interface OCPPEvent {
  on(event: ClientCommand, listener: (this: OCPPServer, ws: WebSocket, params: WSParams, msg: Call) => void): this;

  once(event: ClientCommand, listener: (this: OCPPServer, ws: WebSocket, params: WSParams, msg: Call) => void): this;

  off(event: ClientCommand, listener: (this: OCPPServer, ...args: any[]) => void): this;

  addListener(event: ClientCommand, listener: (this: OCPPServer, ws: WebSocket, params: WSParams, msg: Call) => void): this;

  removeListener(event: ClientCommand, listener: (...args: any[]) => void): this;
}

export class RequestContextError extends Error {
  constructor(message?: any) {
    super(message);
    this.name = "RequestContextError";
  }
}

export type WSParams = {
  id: string;
}

export default class OCPPServer extends EventEmitter implements OCPPEvent {
  public ws: Server;

  constructor(options?: ServerOptions, callback?: () => void) {
    super();
    this.ws = new Server(options, callback);
    this.ws.on('connection', (ws, req) => {
      if (!req.url) throw new RequestContextError();
      const id = req.url.substring(1);
      const params: WSParams = {
        id
      }
      ws.on('message', (message) => {
        const msg = new Call();
        msg.parseString(message.toString());
        if (msg.action && Object.values(ClientCommand).includes(msg.action)) {
          this.emit(msg.action, ws, params, msg);
        }
      });
    });
  }
}
