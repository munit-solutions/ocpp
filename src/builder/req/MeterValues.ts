import Call from '../Call';
import {MeterValue} from '../../type/MeterValue';
import ClientCommand from '../../enum/ClientCommand';

export type MeterValuesPayload = {
  connectorId: number;
  transactionId?: number;
  meterValue: MeterValue[];
};


export default class MeterValues extends Call {
  constructor(public uniqueId: string = '', public payload?: MeterValuesPayload) {
    super();
    this.action = ClientCommand.MeterValues;
  }
}
