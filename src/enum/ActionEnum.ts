enum ActionEnum {
  Authorize = 'Authorize',
  BootNotification = 'BootNotification',
  ChangeAvailability = 'ChangeAvailability',
  ChangeConfiguration = 'ChangeConfiguration',
  ClearCache = 'ClearCache',
  DataTransfer = 'DataTransfer',
  GetConfiguration = 'GetConfiguration',
  Heartbeat = 'Heartbeat',
  MeterValues = 'MeterValues',
  RemoteStartTransaction = 'RemoteStartTransaction',
  RemoteStopTransaction = 'RemoteStopTransaction',
  Reset = 'Reset',
  StartTransaction = 'StartTransaction',
  StatusNotification = 'StatusNotification',
  StopTransaction = 'StopTransaction',
  UnlockConnector = 'UnlockConnector',
  GetDiagnostics = 'GetDiagnostics',
  DiagnosticsStatusNotification = 'DiagnosticsStatusNotification',
  FirmwareStatusNotification = 'FirmwareStatusNotification',
  UpdateFirmware = 'UpdateFirmware',
  GetLocalListVersion = 'GetLocalListVersion',
  SendLocalList = 'SendLocalList',
  CancelReservation = 'CancelReservation',
  ReserveNow = 'ReserveNow',
  ClearChargingProfile = 'ClearChargingProfile',
  GetCompositeSchedule = 'GetCompositeSchedule',
  SetChargingProfile = 'SetChargingProfile',
  TriggerMessage = 'TriggerMessage',
}

export default ActionEnum;
