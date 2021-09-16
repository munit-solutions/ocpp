import CallResult from '../CallResult';

export type HeartbeatResPayload = {
  currentTime: Date;
};

export default class HeartbeatResult extends CallResult {
  constructor(public uniqueId: string, public payload: HeartbeatResPayload) {
    super(uniqueId, payload);
  }
}
