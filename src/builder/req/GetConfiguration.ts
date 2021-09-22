import Call from '../Call';

export type GetConfigurationPayload = {
  key?: string[];
  configurationKey?: KeyValue[];
  unknownKey?: string[];
};

export type KeyValue = {
  key: string;
  readonly: boolean;
  value?: string;
};

export default class GetConfiguration extends Call {
  constructor(public uniqueId: string, public payload?: GetConfigurationPayload) {
    super();
  }
}
