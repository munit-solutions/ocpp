import CallResult from '../CallResult';

export type GetDiagnosticsResPayload = {
  fileName?: string;
};

export default class GetDiagnosticsResult extends CallResult {
  constructor(public uniqueId: string, public payload: GetDiagnosticsResPayload) {
    super(uniqueId, payload);
  }
}
