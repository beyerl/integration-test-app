import { ITestdata } from "src/app/services/test-data.model";

export const IntegrationV2CatalogItemData: { [key: string]: ITestdata } = {
  guid: {
    catalogItemKeyType: 'guid',
    catalogItemKey: '628397de-d8d9-415c-a9fe-80313e5b7f47',
    integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
    url: 'https://localhost:44900/integration/v2/catalogItem/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548',
  },
  legacyPositionId: {
    catalogItemKeyType: 'legacyPositionId',
    catalogItemKey: '8',
    integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
    url: 'https://localhost:44900/integration/v2/catalogItem/legacyPositionId/8?integrationKey=DFA008BB-E1C9-4E0B-A5E9-48F78853D7A1',
  },
  refnr: {
    catalogItemKeyType: 'refnr',
    catalogItemKey: 'CDD4FA66AFAE3477D4B17F8F29760E0D',
    integrationKey: '50747C95-F939-401D-B8A2-C04E2F7D0E65',
    url: 'https://localhost:44900/integration/v2/catalogItem/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?integrationKey=50747C95-F939-401D-B8A2-C04E2F7D0E65',
  },
  anr: {
    catalogItemKeyType: 'anr',
    catalogItemKey: '70005278',
    integrationKey: 'BEA6CB45-D64B-4758-BE58-713A3C21C88C',
    url: 'https://localhost:44900/integration/v2/catalogItem/anr/70005278?integrationKey=BEA6CB45-D64B-4758-BE58-713A3C21C88C',
  },
}


