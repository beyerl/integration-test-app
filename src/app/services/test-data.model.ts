export interface IIntegrationV2Testdata extends ITestData {
    catalogKey?: string,
    catalogItemKeyType: string,
    catalogItemKey: string,
    searchTerm?: string,
    integrationKey: string,
}

export interface IIntegrationV1Testdata extends ITestData {
    legacyUrlPath: string
}

export interface ITestData { }