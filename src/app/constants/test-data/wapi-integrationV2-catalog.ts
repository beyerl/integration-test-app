import { ITestdata } from "src/app/services/test-data.model";

export const IntegrationV2CatalogData: { [key: string]: ITestdata } = {
  default: {
    catalogKey: 'ade_next',
    catalogItemKeyType: '',
    catalogItemKey: '',
    searchTerm: '',
    integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
    url: 'https://localhost:44900/integration/v2/catalog/ade_next?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548',
  },
  search: {
    catalogKey: 'ade_next',
    catalogItemKeyType: '',
    catalogItemKey: '',
    searchTerm: 'FENSTER',
    integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
    url: 'https://localhost:44900/integration/v2/catalog/ade_next/search?searchTerm=FENSTER&integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548',
  },
  guid: {
    catalogKey: 'ade_next',
    catalogItemKeyType: 'guid',
    catalogItemKey: '628397de-d8d9-415c-a9fe-80313e5b7f47',
    searchTerm: '',
    integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
    url: 'https://localhost:44900/integration/v2/catalog/ade_next/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548',
  },
  legacyPositionId: {
    catalogKey: 'ade_next',
    catalogItemKeyType: 'legacyPositionId',
    catalogItemKey: '8',
    searchTerm: '',
    integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
    url: 'https://localhost:44900/integration/v2/catalog/ade_next/legacyPositionId/8?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548',
  },
  refnr: {
    catalogKey: 'lignatur',
    catalogItemKeyType: 'refnr',
    catalogItemKey: 'CDD4FA66AFAE3477D4B17F8F29760E0D',
    searchTerm: '',
    integrationKey: 'bcbbb642-9404-456a-9c12-711f39d8b3ff',
    url: 'https://localhost:44900/integration/v2/catalog/lignatur/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?integrationKey=bcbbb642-9404-456a-9c12-711f39d8b3ff',
  },
  anr: {
    catalogKey: 'cleanroom',
    catalogItemKeyType: 'anr',
    catalogItemKey: '70005278',
    searchTerm: '',
    integrationKey: 'BEA6CB45-D64B-4758-BE58-713A3C21C88C',
    url: 'https://localhost:44900/integration/v2/catalog/cleanroom/anr/70005278?integrationKey=BEA6CB45-D64B-4758-BE58-713A3C21C88C',
  },
}


