import Message from './Message';

export default class CallResult extends Message {
  constructor(public uniqueId: string = '', public payload: { [key: string]: any } = {}) {
    super(uniqueId, payload);
    this.messageType = 3;
  }
}
