import CallResult from '../CallResult';
import ClearCacheStatus from '../../enum/ClearCacheStatus';

export type ClearCacheResPayload = {
  status: ClearCacheStatus;
};
export default class ClearCacheResult extends CallResult {
  constructor(public uniqueId: string, public payload: ClearCacheResPayload) {
    super(uniqueId, payload);
  }
}
