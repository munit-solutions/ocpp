import Message from './Message';

export default class Call extends Message {
  constructor(public uniqueId: string = '', public payload?: { [key: string]: any }) {
    super(uniqueId, payload);
    this.messageType = 2;
  }
}
