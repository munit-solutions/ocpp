import DiagnosticsStatus from '../../enum/DiagnosticsStatus';
import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type DiagnosticsStatusNotificationPayload = {
  status: DiagnosticsStatus;
};

export default class DiagnosticsStatusNotification extends Call {
  constructor(public uniqueId: string = '', public payload?: DiagnosticsStatusNotificationPayload) {
    super();
    this.action = ClientCommand.DiagnosticsStatusNotification;
  }
}
