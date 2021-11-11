export interface IEndpoint {
    domain: string,
    integrationKey: string,
    apiUrlSegment: string,
    integrationType: IIntegrationType,
    catalogKey?: string
    catalogItemKeyType?: string,
    catalogItemKey?: string,
    searchTerm?: string
    exportFormat?: string
}

export enum IIntegrationType {
    Catalog = "catalog",
    CatalogItem = "catalogItem",
    ExportDialog = "exportDialog",
    DirectExport = "export"
}