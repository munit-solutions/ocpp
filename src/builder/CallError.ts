import ErrorCode from '../enum/ErrorCode';
import ActionEnum from '../enum/ActionEnum';

export default class CallError extends Error {
  constructor(
    public messageType: ActionEnum,
    public id: string,
    public errorCode: ErrorCode,
    public errorDescription: { [key: string]: any },
  ) {
    super(`${errorCode} : ${JSON.stringify(errorDescription)}`);
  }
}
