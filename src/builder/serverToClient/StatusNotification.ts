import CallResult from '../CallResult';

export default class StatusNotificationResult extends CallResult {
  constructor(public uniqueId: string) {
    super(uniqueId);
  }
}
