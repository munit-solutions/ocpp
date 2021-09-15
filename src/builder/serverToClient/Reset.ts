import CallResult from '../CallResult';
import ResetStatus from '../../enum/ResetStatus';

export type ResetResPayload = {
    status: ResetStatus;
};

export default class ResetResult extends CallResult {
  constructor(public uniqueId: string, public payload: ResetResPayload) {
    super(uniqueId, payload);
  }
}