import { Server, ServerOptions } from 'ws';
import Call from '../builder/Call';
import ActionEnum from '../enum/ActionEnum';


interface OCPPEvent {
  on(event: ActionEnum, listener: (this: Server, ...args: any[]) => void): this;
  once(event: ActionEnum, listener: (...args: any[]) => void): this;
  off(event: ActionEnum, listener: (this: Server, ...args: any[]) => void): this;
  addListener(event: ActionEnum, listener: (...args: any[]) => void): this;
  removeListener(event: ActionEnum, listener: (...args: any[]) => void): this;
}

export default class OCPPServer extends Server implements OCPPEvent{
  constructor(options?: ServerOptions, callback?: () => void) {
    super(options, callback);
    this.on('connection', () => {
      this.on('message', (message) => {
        const msg = new Call();
        msg.parseString(message.toString());
        if (msg.action && Object.values(ActionEnum).includes(msg.action)) {
          this.emit.bind(this, msg.action, msg.payload);
        }
      });
    });
  }
}
