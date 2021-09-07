import CallResult from '../CallResult';

export default class FirmwareStatusNotificationResult extends CallResult {
  constructor(public uniqueId: string) {
    super(uniqueId);
  }
}
