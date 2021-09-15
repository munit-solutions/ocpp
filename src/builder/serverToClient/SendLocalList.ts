import CallResult from '../CallResult';
import UpdateStatus from '../../enum/UpdateStatus';

export type SendLocalListResPayload = {
    status: UpdateStatus;
};

export default class SendLocalListResult extends CallResult {
  constructor(public uniqueId: string, public payload: SendLocalListResPayload) {
    super(uniqueId, payload);
  }
}