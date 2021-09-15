import AuthorizationStatus from '../enum/AuthorizationStatus';

export type IdTagInfo = {
    expiryDate?: Date,
    parentIdTag?: string,
    status: AuthorizationStatus,
  }

  


