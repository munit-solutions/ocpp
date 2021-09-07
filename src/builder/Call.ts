import ActionEnum from '../enum/ActionEnum';

export default class Call {
  public uniqueId: string;
  public action?: ActionEnum;
  public payload?: any;

  constructor() {
    // TODO: uuid
    this.uniqueId = '';
  }

  parseString(message: string) {
    const [_, uniqueId, action, payload] = JSON.parse(message);
    this.uniqueId = uniqueId;
    this.action = action as ActionEnum;
    this.payload = payload as any;
  }

  public toString = (): string => {
    return JSON.stringify(this.toString());
  };

  public toArray = (): [number, string, ActionEnum, any] => {
    if (this.action !== undefined && !this.payload) throw new Error();
    return [2, this.uniqueId, this.action as ActionEnum, this.payload];
  };
}
