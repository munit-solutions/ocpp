import DiagnosticsStatus from '../../enum/DiagnosticsStatus';
import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type DiagnosticsStatusNotificationPayload = {
  status: DiagnosticsStatus;
};

export default class DiagnosticsStatusNotification extends Call {
  constructor(public payload?: DiagnosticsStatusNotificationPayload) {
    super();
    this.action = ActionEnum.DiagnosticsStatusNotification;
  }
}
