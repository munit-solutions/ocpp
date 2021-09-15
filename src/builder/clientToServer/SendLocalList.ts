import Call from '../Call';
import UpdateType from '../../enum/UpdateType';


export type SendLocalListPayload = {
    listVersion: number;
    localAuthorizationList?: any;
    updateType: UpdateType;
};

export default class SendLocalList extends Call {
  constructor(public payload?: SendLocalListPayload) {
    super();
  }
}