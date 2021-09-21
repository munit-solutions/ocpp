import CallResult from '../CallResult';
import AuthorizationStatus from '../../enum/AuthorizationStatus';

export type AuthorizeResPayload = {
  idTagInfo: IdTagInfo;
};

export type IdTagInfo = {
  expiryDate?: Date;
  parentIdTag?: Date;
  status: AuthorizationStatus;
};

export default class AuthorizeResult extends CallResult {
  constructor(public uniqueId: string, public payload: AuthorizeResPayload) {
    super(uniqueId, payload);
  }
}
