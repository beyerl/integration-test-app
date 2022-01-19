import { IIntegrationV2Testdata } from "src/app/services/test-data.model";

export const IntegrationV2ExportData: { [key: string]: IIntegrationV2Testdata } = {
  guid: {
    "catalogItemKeyType": "guid",
    "catalogItemKey": "ED70588A-617E-4F24-9214-0EEC52949764",
    "catalogItemKeyQS": "C7276B8C-00F3-4762-A5E8-9404B4A31C8B",
    "integrationKey": "6A44BF70-AA8C-4D37-BD63-AB99A01B65F5",
  },
  legacyPositionId: {
    "catalogItemKeyType": "legacyPositionId",
    "catalogItemKey": "10",
    "integrationKey": "6A44BF70-AA8C-4D37-BD63-AB99A01B65F5",
  },
  refnr: {
    "catalogItemKeyType": "refnr",
    "catalogItemKey": "1",
    "integrationKey": "6A44BF70-AA8C-4D37-BD63-AB99A01B65F5",
  },
  anr: {
    "catalogItemKeyType": "anr",
    "catalogItemKey": "1234",
    "integrationKey": "6A44BF70-AA8C-4D37-BD63-AB99A01B65F5",
  }
};
