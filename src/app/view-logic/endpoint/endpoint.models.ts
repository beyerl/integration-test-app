import { IEnvironment } from "src/app/services/environment.model";
import { IIntegrationV2Testdata, ITestData } from "src/app/services/test-data.model";
import { IUsecase } from "src/app/services/usecase.model";

export interface IEndpoint {
    domain: string,
    integrationKey?: string,
    apiUrlSegment?: string,
    integrationType?: IIntegrationType,
    catalogKey?: string
    catalogItemKeyType?: string,
    catalogItemKey?: string,
    searchTerm?: string,
    exportFormat?: string,
    legacyUrlPath?: string
}

export enum IIntegrationType {
    Catalog = "catalog",
    CatalogItem = "catalogItem",
    ExportDialog = "exportDialog",
    DirectExport = "export"
}

export abstract class IEndpointVisitor {
    public abstract getEndpoint(environment: IEnvironment, integrationType: IIntegrationType, usecase: IUsecase): IEndpoint
    protected abstract getTestData(integrationType: IIntegrationType, usecase?: IUsecase): ITestData
    public abstract getIframeSrc(endpoint: IEndpoint)
}