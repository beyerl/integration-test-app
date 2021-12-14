import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { EnvironmentService } from 'src/app/services/environment.service';
import { IEndpoint, IEndpointVisitor, IIntegrationType } from 'src/app/view-logic/endpoint/endpoint.models';
import { IEnvironment } from 'src/app/services/environment.model';
import { IUsecase } from 'src/app/services/usecase.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent implements OnInit, OnDestroy {
  endpoint: IEndpoint
  endpointSubscription: Subscription

  endPoint: IEndpoint

  @Input() endpointVisitor: IEndpointVisitor

  constructor(
    private environmentService: EnvironmentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const environment$ = this.environmentService.getAsObservable()
    const route$ = this.route.params

    this.endpointSubscription = combineLatest([environment$, route$]).subscribe(
      ([environment, route]) => this.endpoint = this.endpointVisitor.getEndpoint(environment, route.integrationType, route.usecase)
    )
  }

  ngOnDestroy() {
    this.endpointSubscription.unsubscribe()
  }

  getDoesIntegrationTypeRequireIframe(integrationType: IIntegrationType) {
    for (let item of [IIntegrationType.Catalog, IIntegrationType.CatalogItem, IIntegrationType.ExportDialog]) {
      if (item === integrationType) {
        return true
      }
    }
    return false
  }
}