import { IIntegrationV2Testdata } from "src/app/services/test-data.model";

export const IntegrationV2ExportData: { [key: string]: IIntegrationV2Testdata } = {
  guid: {
    catalogItemKeyType: 'guid',
    catalogItemKey: '628397de-d8d9-415c-a9fe-80313e5b7f47',
    integrationKey: 'CC86E7CE-7E4D-45FE-A098-A58EF95F321E',
    url: 'https://localhost:44900/integration/v2/export/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?exportFormat=101&integrationKey=CC86E7CE-7E4D-45FE-A098-A58EF95F321E',
  },
  legacyPositionId: {
    catalogItemKeyType: 'legacyPositionId',
    catalogItemKey: '8',
    integrationKey: 'CC86E7CE-7E4D-45FE-A098-A58EF95F321E',
    url: 'https://localhost:44900/integration/v2/export/legacyPositionId/8?exportFormat=101&integrationKey=CC86E7CE-7E4D-45FE-A098-A58EF95F321E',
  },
  refnr: {
    catalogItemKeyType: 'refnr',
    catalogItemKey: 'CDD4FA66AFAE3477D4B17F8F29760E0D',
    integrationKey: '9d8d2f25-635b-4293-b23e-56354510ad53',
    url: 'https://localhost:44900/integration/v2/export/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?exportFormat=101&integrationKey=9d8d2f25-635b-4293-b23e-56354510ad53',
  },
  anr: {
    catalogItemKeyType: 'anr',
    catalogItemKey: '70005278',
    integrationKey: '2BA562E7-997D-4346-A8F8-FC30C47071EB',
    url: 'https://localhost:44900/integration/v2/export/anr/70005278?exportFormat=101&integrationKey=2BA562E7-997D-4346-A8F8-FC30C47071EB',
  },
};
