import CallResult from '../CallResult';
import RegistrationStatus from '../../enum/RegistrationStatus';

export type BootNotificationResPayload = {
  currentTime: Date;
  interval: number;
  status: RegistrationStatus;
};

export default class BootNotificationResult extends CallResult {
  constructor(public uniqueId: string, public payload: BootNotificationResPayload) {
    super(uniqueId, payload);
  }
}
