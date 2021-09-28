import EventEmitter from 'events';
import WebSocket from 'ws';
import {URL} from 'url';
import {ClientRequestArgs} from 'http';
import Message from '../builder/Message';
import ClientCommand from '../enum/ClientCommand';

export default class OCPPClient extends EventEmitter {
  public ws: WebSocket;

  constructor(
    address: string | URL,
    options?: WebSocket.ClientOptions | ClientRequestArgs,
  );
  constructor(
    address: string | URL,
    protocols?: string | string[],
    options?: WebSocket.ClientOptions | ClientRequestArgs,
  );
  constructor(...args: any[]) {
    super();
    if (args.length === 2) this.ws = new WebSocket(args[0], args[1]);
    else this.ws = new WebSocket(args[0], args[1], args[2]);

    this.ws.on('message', (msg) => {
      const message = new Message();
      message.parseString(msg.toString());
      this.emit(message.action || message.uniqueId, {msg});
    });
  }

  on(event: ClientCommand | 'context_error' | string, listener: (this: OCPPClient, {
    msg
  }: { msg: Message }) => void) {
    return super.on(event, listener);
  }

  once(event: ClientCommand | 'context_error' | string, listener: (this: OCPPClient, {
    msg
  }: { msg: Message }) => void) {
    return super.once(event, listener);
  }
}
