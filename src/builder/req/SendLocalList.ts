import Call from '../Call';
import UpdateType from '../../enum/UpdateType';
import ClientCommand from '../../enum/ClientCommand';


export type SendLocalListPayload = {
    listVersion: number;
    localAuthorizationList?: any;
    updateType: UpdateType;
};

export default class SendLocalList extends Call {
  constructor(public uniqueId: string = '', public payload?: SendLocalListPayload) {
    super();
    this.action = ClientCommand.SendLocalList;
  }
}
