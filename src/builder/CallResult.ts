export default class CallResult {
  constructor(public uniqueId: string, public payload: { [key: string]: any } = {}) {}

  public toString = (): string => {
    return JSON.stringify(this.toArray());
  };

  public toArray = (): [number, string, { [key: string]: any }] => {
    return [3, this.uniqueId, this.payload];
  };
}
