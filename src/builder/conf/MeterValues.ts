import CallResult from '../CallResult';

export default class MeterValuesResult extends CallResult {
  constructor(public uniqueId: string) {
    super(uniqueId);
  }
}
