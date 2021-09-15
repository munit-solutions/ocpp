import CallResult from '../CallResult';

export default class UpdateFirmwareResult extends CallResult {
  constructor(public uniqueId: string) {
    super(uniqueId);
  }
}