import CallResult from '../CallResult';

export type GetConfigurationResPayload = {
  configurationKey?: KeyValue[];
  unknownKey?: string[];
};

export type KeyValue = {
  key: string;
  readonly: boolean;
  value?: string;
};

export default class GetConfigurationResult extends CallResult {
  constructor(public uniqueId: string, public payload: GetConfigurationResPayload) {
    super(uniqueId, payload);
  }
}
