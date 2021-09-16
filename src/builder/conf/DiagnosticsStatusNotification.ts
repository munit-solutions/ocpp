import CallResult from '../CallResult';

export default class DiagnosticsStatusNotificationResult extends CallResult {
  constructor(public uniqueId: string) {
    super(uniqueId);
  }
}
