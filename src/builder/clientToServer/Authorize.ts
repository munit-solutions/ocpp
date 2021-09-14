import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type AuthorizePayload = {
  idTag: string;
};
export default class Authorize extends Call {
  constructor(public payload?: AuthorizePayload) {
    super();
    this.action = ClientCommand.BootNotification;
  }
}
