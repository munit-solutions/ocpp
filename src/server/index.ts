import {Server, ServerOptions} from 'ws';
import Call from '../builder/Call';
import ClientCommand from '../enum/ClientCommand';
import {EventEmitter} from 'events';
import CallResult from '../builder/CallResult';


interface OCPPEvent {
  on(event: ClientCommand, listener: (this: OCPPServer, arg: Call) => void): this;

  once(event: ClientCommand, listener: (...args: any[]) => void): this;

  off(event: ClientCommand, listener: (this: OCPPServer, ...args: any[]) => void): this;

  addListener(event: ClientCommand, listener: (...args: any[]) => void): this;

  removeListener(event: ClientCommand, listener: (...args: any[]) => void): this;
}

export default class OCPPServer extends EventEmitter implements OCPPEvent {
  public ws: Server;

  constructor(options?: ServerOptions, callback?: () => void) {
    super();
    this.ws = new Server(options, callback);
    this.ws.on('connection', (ws) => {
      ws.on('message', (message) => {
        const msg = new Call();
        msg.parseString(message.toString());
        if (msg.action && Object.values(ClientCommand).includes(msg.action)) {
          this.emit(msg.action, msg);
        }
      });
    });
  }
  send(data: CallResult) {
    this.ws.on('open', (ws: WebSocket) => {
      ws.send(data.toString())
    });
  }
}
