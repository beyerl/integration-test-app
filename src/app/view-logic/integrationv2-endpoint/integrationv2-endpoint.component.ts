import { Component, OnInit } from '@angular/core';
import { ApiUrlSegment } from 'src/app/constants/config';
import { IntegrationV2CatalogData } from 'src/app/constants/test-data/wapi-integrationV2-catalog';
import { IntegrationV2CatalogItemData } from 'src/app/constants/test-data/wapi-integrationV2-catalog-item';
import { IntegrationV2ExportData } from 'src/app/constants/test-data/wapi-integrationV2-export';
import { IntegrationV2ExportDialogData } from 'src/app/constants/test-data/wapi-integrationV2-export-dialog';
import { isNullishOrEmptyString } from 'src/app/helpers/utils';
import { IEndpoint, IEndpointVisitor, IIntegrationType } from 'src/app/view-logic/endpoint/endpoint.models';
import { IEnvironment } from 'src/app/services/environment.model';
import { IIntegrationV2Testdata } from 'src/app/services/test-data.model';
import { IUsecase } from 'src/app/services/usecase.model';

@Component({
  selector: 'app-integrationv2-endpoint',
  templateUrl: './integrationv2-endpoint.component.html',
  styleUrls: ['./integrationv2-endpoint.component.css']
})
export class IntegrationV2EndpointComponent implements OnInit {

  integrationV2EndpointVisitor = new IntegrationV2EndpointVisitor()

  constructor() { }

  ngOnInit(): void {
  }
}

export class IntegrationV2EndpointVisitor extends IEndpointVisitor {
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

  protected getTestData(integrationType: IIntegrationType, usecase: IUsecase): IIntegrationV2Testdata {
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

  public getIframeSrc(endpoint: IEndpoint) {
    switch (endpoint.integrationType) {
      case IIntegrationType.Catalog:
        return !isNullishOrEmptyString(endpoint.catalogItemKeyType)
          ? `${endpoint.domain}/${endpoint.apiUrlSegment}/${IIntegrationType.Catalog}/${endpoint.catalogKey}/${endpoint.catalogItemKeyType}/${endpoint.catalogItemKey}?integrationKey=${endpoint.integrationKey}`
          : !isNullishOrEmptyString(endpoint.searchTerm)
            ? `${endpoint.domain}/${endpoint.apiUrlSegment}/${IIntegrationType.Catalog}/${endpoint.catalogKey}/search?searchTerm=${endpoint.searchTerm}&integrationKey=${endpoint.integrationKey}`
            : `${endpoint.domain}/${endpoint.apiUrlSegment}/${IIntegrationType.Catalog}/${endpoint.catalogKey}?integrationKey=${endpoint.integrationKey}`
      case IIntegrationType.CatalogItem:
        return `${endpoint.domain}/${endpoint.apiUrlSegment}/${IIntegrationType.CatalogItem}/${endpoint.catalogItemKeyType}/${endpoint.catalogItemKey}?integrationKey=${endpoint.integrationKey}`
      case IIntegrationType.ExportDialog:
        return `${endpoint.domain}/${endpoint.apiUrlSegment}/${IIntegrationType.ExportDialog}/${endpoint.catalogItemKeyType}/${endpoint.catalogItemKey}?integrationKey=${endpoint.integrationKey}`
      case IIntegrationType.DirectExport:
        return `${endpoint.domain}/${endpoint.apiUrlSegment}/${IIntegrationType.DirectExport}/${endpoint.catalogItemKeyType}/${endpoint.catalogItemKey}?integrationKey=${endpoint.integrationKey}&exportFormat=${endpoint.exportFormat}`
      default:
        throw new Error(`Enum argument out of range for integrationtype ${endpoint.integrationType}`)
    }
  }
}
