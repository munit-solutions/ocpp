import ClientCommand from '../enum/ClientCommand';

export default class Message {
  public uniqueId: string;
  public action?: ClientCommand;
  public payload?: any;
  public messageType = 3;

  constructor(uniqueId: string = '', payload?: { [key: string]: any }) {
    this.uniqueId = uniqueId;
    this.payload = payload;
  }

  parseString(message: string) {
    const [messageType, uniqueId, actionOrPayload, payload] = JSON.parse(message);
    this.messageType = messageType;
    this.uniqueId = uniqueId;
    if (payload) {
      this.action = actionOrPayload as ClientCommand;
      this.payload = payload as any;
    } else {
      this.payload = actionOrPayload as any;
    }
  }

  public toString = (): string => {
    return JSON.stringify(this.toArray());
  };

  public toArray = (): any[] => {
    return this.messageType === 3 ? [this.messageType, this.uniqueId, this.payload ?? {}] : [this.messageType, this.uniqueId, this.action as ClientCommand, this.payload ?? {}];
  };
}
