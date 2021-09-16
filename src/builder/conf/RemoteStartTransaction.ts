import CallResult from '../CallResult';

export type RemoteStartTrancsactionResPayload = {
    connectorId?: number;
    idTag: string;
    chargingProfile?: any;
};

export default class RemoteStartTransactionResult extends CallResult {
  constructor(public uniqueId: string, public payload: RemoteStartTrancsactionResPayload) {
    super(uniqueId, payload);
  }
}