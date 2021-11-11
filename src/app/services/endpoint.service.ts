import { Injectable } from '@angular/core';
import { ITestdata } from './test-data.model';
import { IntegrationV2CatalogData } from '../constants/test-data/wapi-integrationV2-catalog';
import { IntegrationV2CatalogItemData } from '../constants/test-data/wapi-integrationV2-catalog-item';
import { IntegrationV2ExportData } from '../constants/test-data/wapi-integrationV2-export';
import { IntegrationV2ExportDialogData } from '../constants/test-data/wapi-integrationV2-export-dialog';
import { IEndpoint, IIntegrationType } from './endpoint.models';
import { IEnvironment } from './environment.model';
import { IUsecase } from './usecase.model';
import { ApiUrlSegment } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor() { }


  public getEndpoint(environment: IEnvironment, integrationType: IIntegrationType, usecase: IUsecase): IEndpoint {
    const testData = this.getTestData(integrationType, usecase)
    if (!testData) throw new Error(`Testdata not found for integrationtype ${integrationType} and usecase ${usecase}`)

    switch (integrationType) {
      case IIntegrationType.Catalog:
        return {
          domain: environment.domain,
          integrationKey: testData.integrationKey,
          apiUrlSegment: ApiUrlSegment,
          integrationType,
          catalogKey: testData.catalogKey,
          catalogItemKeyType: testData.catalogItemKeyType,
          catalogItemKey: testData.catalogItemKey,
          searchTerm: testData.searchTerm
        }
      case IIntegrationType.CatalogItem:
      case IIntegrationType.ExportDialog: {
        return {
          domain: environment.domain,
          integrationKey: testData.integrationKey,
          apiUrlSegment: ApiUrlSegment,
          integrationType,
          catalogItemKeyType: testData.catalogItemKeyType,
          catalogItemKey: testData.catalogItemKey
        }
      }
      case IIntegrationType.DirectExport: {
        return {
          domain: environment.domain,
          integrationKey: testData.integrationKey,
          apiUrlSegment: ApiUrlSegment,
          integrationType,
          catalogItemKeyType: testData.catalogItemKeyType,
          catalogItemKey: testData.catalogItemKey,
          exportFormat: "101"
        }
      }
      default:
        throw new Error(`Enum argument out of range for integrationtype ${integrationType} and usecase ${usecase}`)
    }
  }

  private getTestData(integrationType: IIntegrationType, usecase: IUsecase): ITestdata {
    switch (integrationType) {
      case IIntegrationType.Catalog:
        return IntegrationV2CatalogData[usecase]
      case IIntegrationType.CatalogItem:
        return IntegrationV2CatalogItemData[usecase]
      case IIntegrationType.ExportDialog:
        return IntegrationV2ExportDialogData[usecase]
      case IIntegrationType.DirectExport:
        return IntegrationV2ExportData[usecase]
      default:
        throw new Error(`Enum argument out of range for integrationtype ${integrationType} and usecase ${usecase}`)
    }
  }
}
