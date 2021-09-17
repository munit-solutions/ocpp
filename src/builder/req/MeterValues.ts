import Call from '../Call';

export type MeterValuesPayload = {
  connectorId: number;
  transactionId?: number;
  meterValue: MeterValue[];
};

export type MeterValue = {
  timestamp: Date,
  sampledValue?: SampledValue
}

export type SampledValue = {
  // TODO: has to be defined
}

export default class MeterValues extends Call {
  constructor(public payload?: MeterValuesPayload) {
    super();
  }
}
