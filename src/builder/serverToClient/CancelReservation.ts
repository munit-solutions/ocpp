import CallResult from '../CallResult';
import CancelReservationStatus from '../../enum/CancelReservationStatus';

export type CancelReservationResPayload = {
  status: CancelReservationStatus;
};
export default class CancelReservationResult extends CallResult {
  constructor(public uniqueId: string, public payload: CancelReservationResPayload) {
    super(uniqueId, payload);
  }
}
