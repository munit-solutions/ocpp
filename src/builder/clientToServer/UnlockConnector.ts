import Call from '../Call';

export type TriggerMessagePayload = {
  connectorId: number;
};

export default class TriggerMessage extends Call {
  constructor(public payload?: TriggerMessagePayload) {
    super();
  }
}