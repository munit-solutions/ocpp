import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type CancelReservationPayload = {
  reservationId: number;
};
export default class CancelReservation extends Call {
  constructor(public payload?: CancelReservationPayload) {
    super();
    this.action = ClientCommand.CancelReservation;
  }
}
