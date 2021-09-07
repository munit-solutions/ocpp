import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type BootNotificationPayload = {
  chargeBoxSerialNumber?: string;
  chargePointModel: string;
  chargePointSerialNumber?: string;
  chargePointVendor: string;
  firmwareVersion?: string;
  iccid?: string;
  imsi?: string;
  meterSerialNumber?: string;
  meterType?: string;
};
export default class BootNotification extends Call {
  constructor(public payload?: BootNotificationPayload) {
    super();
    this.action = ActionEnum.BootNotification;
  }
}
