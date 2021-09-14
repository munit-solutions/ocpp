import ClientCommand from '../enum/ClientCommand';

export default class Call {
  public uniqueId: string;
  public action?: ClientCommand;
  public payload?: any;

  constructor() {
    // TODO: uuid
    this.uniqueId = '';
  }

  parseString(message: string) {
    const [_, uniqueId, action, payload] = JSON.parse(message);
    this.uniqueId = uniqueId;
    this.action = action as ClientCommand;
    this.payload = payload as any;
  }

  public toString = (): string => {
    return JSON.stringify(this.toArray());
  };

  public toArray = (): [number, string, ClientCommand, any] => {
    if (this.action !== undefined && !this.payload) throw new Error();
    return [2, this.uniqueId, this.action as ClientCommand, this.payload];
  };
}
