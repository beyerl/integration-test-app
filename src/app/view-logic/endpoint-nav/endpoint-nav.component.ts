import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDropdown } from 'src/app/components/navbar/navbar.model';
import { IntegrationV2CatalogData } from 'src/app/constants/test-data/wapi-integrationV2-catalog';
import { IntegrationV2CatalogItemData } from 'src/app/constants/test-data/wapi-integrationV2-catalog-item';
import { IntegrationV2ExportData } from 'src/app/constants/test-data/wapi-integrationV2-export';
import { IntegrationV2ExportDialogData } from 'src/app/constants/test-data/wapi-integrationV2-export-dialog';
import { firstLetterToUpper } from 'src/app/helpers/utils';
import { IIntegrationType } from 'src/app/view-logic/endpoint/endpoint.models';
import { Environment, IEnvironment } from 'src/app/services/environment.model';
import { EnvironmentService } from 'src/app/services/environment.service';
import { IIntegrationV2Testdata } from 'src/app/services/test-data.model';
import { IUsecase } from 'src/app/services/usecase.model';
import { IntegrationV1Data } from 'src/app/constants/test-data/wapi-integrationV1';
import { legacyRoutingSegment } from 'src/app/constants/config';


@Component({
  selector: 'app-endpoint-nav',
  templateUrl: './endpoint-nav.component.html',
  styleUrls: ['./endpoint-nav.component.css']
})
export class EndpointNavComponent implements OnInit, OnDestroy {

  dropdowns: IDropdown[] = [
    {
      title: "Katalog-Integration",
      isCollapsed: true,
      btnClass: "bg-light",
      items: this.getIntegrationV2DropdownItems(IIntegrationType.Catalog)
    },
    {
      title: "Positions-Integration",
      isCollapsed: true,
      btnClass: "bg-light",
      items: this.getIntegrationV2DropdownItems(IIntegrationType.CatalogItem)
    },
    {
      title: "Export-Dialog-Integration",
      isCollapsed: true,
      btnClass: "bg-light",
      items: this.getIntegrationV2DropdownItems(IIntegrationType.ExportDialog)
    },
    {
      title: "Direkter Export",
      isCollapsed: true,
      btnClass: "bg-light",
      items: this.getIntegrationV2DropdownItems(IIntegrationType.DirectExport)
    },
    {
      title: "Integration V1",
      isCollapsed: true,
      btnClass: "bg-light",
      items: this.getIntegrationV1DropdownItems()
    },
    {
      title: "Environment",
      isCollapsed: true,
      btnClass: "bg-primary",
      items: Object.keys(Environment).map(key => ({ key, title: Environment[key].title, onClick: (key: string) => this.onEnvironmentClick(key) }))
    },
  ]

  currentEnvironment: IEnvironment = Environment.localhost
  environmentSubscription: Subscription

  constructor(
    private environmentService: EnvironmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.environmentSubscription = this.environmentService.getAsObservable().subscribe(environment => this.currentEnvironment = environment)
  }

  ngOnDestroy() {
    this.environmentSubscription.unsubscribe()
  }

  private getIntegrationV2DropdownItems(integrationType: IIntegrationType) {
    switch (integrationType) {
      case IIntegrationType.Catalog: {
        return this.processGetIntegrationV2DropdownItems(IntegrationV2CatalogData, integrationType)
      }
      case IIntegrationType.CatalogItem: {
        return this.processGetIntegrationV2DropdownItems(IntegrationV2CatalogItemData, integrationType)
      }
      case IIntegrationType.ExportDialog: {
        return this.processGetIntegrationV2DropdownItems(IntegrationV2ExportDialogData, integrationType)
      }
      case IIntegrationType.DirectExport: {
        return this.processGetIntegrationV2DropdownItems(IntegrationV2ExportData, integrationType)
      }
    }
  }

  private processGetIntegrationV2DropdownItems(testData: { [key: string]: IIntegrationV2Testdata }, integrationType: IIntegrationType) {
    return Object.keys(testData).map(key => ({
      key,
      title: firstLetterToUpper(key),
      onClick: (key: string) => { this.onIntegrationV2DropdownItemClick(integrationType, key as IUsecase) }
    })
    )
  }

  public onIntegrationV2DropdownItemClick = (integrationType: IIntegrationType, usecase: IUsecase) => {
    this.router.navigateByUrl(`/${integrationType}/${usecase}`)
  }

  private getIntegrationV1DropdownItems() {
    return Object.keys(IntegrationV1Data).map(key => ({
      key,
      title: firstLetterToUpper(key),
      onClick: (key: string) => { this.onDropdownIntegrationV1ItemClick(key as IIntegrationType) }
    })
    )
  }

  public onDropdownIntegrationV1ItemClick = (integrationType: IIntegrationType) => {
    this.router.navigateByUrl(`${legacyRoutingSegment}/${integrationType}`)
  }

  public onEnvironmentClick = (key: string) => {
    if (!key) return
    this.environmentService.set(Environment[key])
  }
}
