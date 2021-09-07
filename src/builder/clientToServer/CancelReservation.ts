import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type CancelReservationPayload = {
  reservationId: number;
};
export default class CancelReservation extends Call {
  constructor(public payload?: CancelReservationPayload) {
    super();
    this.action = ActionEnum.CancelReservation;
  }
}
