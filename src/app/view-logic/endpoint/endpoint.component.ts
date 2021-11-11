import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { EnvironmentService } from 'src/app/services/environment.service';
import { IEndpoint, IIntegrationType } from 'src/app/services/endpoint.models';
import { EndpointService } from 'src/app/services/endpoint.service';
import { isNullishOrEmptyString } from 'src/app/helpers/utils';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent implements OnInit, OnDestroy {
  endpoint: IEndpoint
  endpointSubscription: Subscription

  endPoint: IEndpoint

  constructor(
    private environmentService: EnvironmentService,
    private route: ActivatedRoute,
    private endpointService: EndpointService
  ) { }

  ngOnInit() {
    const environment$ = this.environmentService.getAsObservable()
    const route$ = this.route.params

    this.endpointSubscription = combineLatest([environment$, route$]).subscribe(
      ([environment, route]) => this.endpoint = this.endpointService.getEndpoint(environment, route.integrationType, route.usecase)
    )
  }

  ngOnDestroy() {
    this.endpointSubscription.unsubscribe()
  }

  getIframeSrc(endpoint: IEndpoint) {
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

  getDoesIntegrationTypeRequireIframe(integrationType: IIntegrationType) {
    return [IIntegrationType.Catalog, IIntegrationType.CatalogItem, IIntegrationType.ExportDialog].includes(integrationType)
  }
}

