import Call from '../Call';
import ErrorCode from '../../enum/ErrorCode';
import ChargePointStatus from '../../enum/ChargePointStatus';

export type StatusNotificationPayload = {
  connectorId: number;
  errorCode: ErrorCode;
  info?: string;
  status:ChargePointStatus;
  timestamp?:Date
  vendorId?:string
  vendorErrorCode?:string
};

export default class StatusNotification extends Call {
  constructor(public payload?: StatusNotificationPayload) {
    super();
  }
}
