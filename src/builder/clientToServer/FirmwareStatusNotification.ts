import FirmwareStatus from '../../enum/FirmwareStatus';
import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type FirmwareStatusNotificationPayload = {
  status: FirmwareStatus;
};

export default class FirmwareStatusNotification extends Call {
  constructor(public payload?: FirmwareStatusNotificationPayload) {
    super();
    this.action = ActionEnum.FirmwareStatusNotification;
  }
}
