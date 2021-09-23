import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type GetDiagnosticsPayload = {
  location: string;
  retries?: number;
  retryInterval?: number;
  startTime?: Date;
  stopTime?: Date;
};

export default class GetDiagnostics extends Call {
  constructor(public uniqueId: string = '', public payload?: GetDiagnosticsPayload) {
    super();
    this.action = ClientCommand.GetDiagnostics;
  }
}
