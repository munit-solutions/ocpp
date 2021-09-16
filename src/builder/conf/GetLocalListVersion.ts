import CallResult from '../CallResult';

export type GetLocalListVersionResPayload = {
  listVersion: number;
};

export default class GetLocalListVersionResult extends CallResult {
  constructor(public uniqueId: string, public payload: GetLocalListVersionResPayload) {
    super(uniqueId, payload);
  }
}
