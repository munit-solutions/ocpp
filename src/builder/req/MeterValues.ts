import Call from '../Call';
import {MeterValue} from '../../type/MeterValue';

export type MeterValuesPayload = {
  connectorId: number;
  transactionId?: number;
  meterValue: MeterValue[];
};


export default class MeterValues extends Call {
  constructor(public payload?: MeterValuesPayload) {
    super();
  }
}
