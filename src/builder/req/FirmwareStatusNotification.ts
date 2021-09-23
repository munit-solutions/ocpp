import FirmwareStatus from '../../enum/FirmwareStatus';
import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type FirmwareStatusNotificationPayload = {
  status: FirmwareStatus;
};

export default class FirmwareStatusNotification extends Call {
  constructor(public uniqueId: string = '', public payload?: FirmwareStatusNotificationPayload) {
    super();
    this.action = ClientCommand.FirmwareStatusNotification;
  }
}
