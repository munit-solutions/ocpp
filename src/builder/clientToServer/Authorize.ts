import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type AuthorizePayload = {
  idTag: string;
};
export default class Authorize extends Call {
  constructor(public payload?: AuthorizePayload) {
    super();
    this.action = ActionEnum.BootNotification;
  }
}
