import CallResult from '../CallResult';
import TriggerMessageStatus from 'src/enum/TriggerMessageStatus';

export type TriggerMessageResPayload = {
    status: TriggerMessageStatus;
};

export default class TriggerMessageResult extends CallResult {
  constructor(public uniqueId: string, public payload: TriggerMessageResPayload) {
    super(uniqueId, payload);
  }
}