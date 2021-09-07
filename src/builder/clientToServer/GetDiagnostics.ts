import Call from '../Call';

export type GetDiagnosticsPayload = {
  location: string;
  retries?: number;
  retryInterval?: number;
  startTime?: Date;
  stopTime?: Date;
};

export default class GetDiagnostics extends Call {
  constructor(public payload?: GetDiagnosticsPayload) {
    super();
  }
}
