import CallResult from '../CallResult';
import ReservationStatus from '../../enum/ReservationStatus';

export type ReserveNowResPayload = {
    status: ReservationStatus;
};

export default class ReserveNowResult extends CallResult {
  constructor(public uniqueId: string, public payload: ReserveNowResPayload) {
    super(uniqueId, payload);
  }
}