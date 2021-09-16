import CallResult from '../CallResult';
import AvailabilityStatus from '../../enum/AvailabilityStatus';

export type ChangeAvailabilityResPayload = {
  status: AvailabilityStatus;
};
export default class ChangeAvailabilityResult extends CallResult {
  constructor(public uniqueId: string, public payload: ChangeAvailabilityResPayload) {
    super(uniqueId, payload);
  }
}
