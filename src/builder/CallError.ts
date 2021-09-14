import ErrorCode from '../enum/ErrorCode';
import ClientCommand from '../enum/ClientCommand';

export default class CallError extends Error {
  constructor(
    public messageType: ClientCommand,
    public id: string,
    public errorCode: ErrorCode,
    public errorDescription: { [key: string]: any },
  ) {
    super(`${errorCode} : ${JSON.stringify(errorDescription)}`);
  }
}
