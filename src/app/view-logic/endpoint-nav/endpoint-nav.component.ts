import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDropdown } from 'src/app/components/navbar/navbar.model';
import { IntegrationV2CatalogData } from 'src/app/constants/test-data/wapi-integrationV2-catalog';
import { IntegrationV2CatalogItemData } from 'src/app/constants/test-data/wapi-integrationV2-catalog-item';
import { IntegrationV2ExportData } from 'src/app/constants/test-data/wapi-integrationV2-export';
import { IntegrationV2ExportDialogData } from 'src/app/constants/test-data/wapi-integrationV2-export-dialog';
import { firstLetterToUpper } from 'src/app/helpers/utils';
import { IIntegrationType } from 'src/app/services/endpoint.models';
import { Environment, IEnvironment } from 'src/app/services/environment.model';
import { EnvironmentService } from 'src/app/services/environment.service';
import { ITestdata } from 'src/app/services/test-data.model';
import { IUsecase } from 'src/app/services/usecase.model';


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
      items: this.getDropdownItems(IIntegrationType.Catalog)
    },
    {
      title: "Positions-Integration",
      isCollapsed: true,
      btnClass: "bg-light",
      link: "/catalog-item-test",
      items: this.getDropdownItems(IIntegrationType.CatalogItem)
    },
    {
      title: "Export-Dialog-Integration",
      isCollapsed: true,
      btnClass: "bg-light",
      link: "/export-dialog-test",
      items: this.getDropdownItems(IIntegrationType.ExportDialog)
    },
    {
      title: "Direkter Export",
      isCollapsed: true,
      btnClass: "bg-light",
      link: "/direct-export-test",
      items: this.getDropdownItems(IIntegrationType.DirectExport)
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

  private getDropdownItems(integrationType: IIntegrationType) {
    switch (integrationType) {
      case IIntegrationType.Catalog: {
        return this.processGetDropdownItems(IntegrationV2CatalogData, integrationType)
      }
      case IIntegrationType.CatalogItem: {
        return this.processGetDropdownItems(IntegrationV2CatalogItemData, integrationType)
      }
      case IIntegrationType.ExportDialog: {
        return this.processGetDropdownItems(IntegrationV2ExportDialogData, integrationType)
      }
      case IIntegrationType.DirectExport: {
        return this.processGetDropdownItems(IntegrationV2ExportData, integrationType)
      }
    }
  }

  private processGetDropdownItems(testData: { [key: string]: ITestdata }, integrationType: IIntegrationType) {
    return Object.keys(testData).map(key => ({
      key,
      title: firstLetterToUpper(key),
      onClick: (key: string) => { this.onDropdownItemClick(integrationType, key as IUsecase) }
    })
    )
  }

  public onDropdownItemClick = (integrationType: IIntegrationType, usecase: IUsecase) => {
    this.router.navigateByUrl(`/${integrationType}/${usecase}`)
  }

  public onEnvironmentClick = (key: string) => {
    if (!key) return
    this.environmentService.set(Environment[key])
  }
}
