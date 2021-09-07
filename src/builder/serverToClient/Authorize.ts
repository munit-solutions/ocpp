import CallResult from '../CallResult';

export type AuthorizeResPayload = {
  idTagInfo: Date;
};

export default class AuthorizeResult extends CallResult {
  constructor(public uniqueId: string, public payload: AuthorizeResPayload) {
    super(uniqueId, payload);
  }
}
