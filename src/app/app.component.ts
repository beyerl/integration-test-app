import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDropdown } from './components/navbar/navbar.model';
import { IntegrationV2CatalogData } from './constants/test-data/wapi-integrationV2-catalog';
import { IntegrationV2CatalogItemData } from './constants/test-data/wapi-integrationV2-catalog-item';
import { IntegrationV2ExportData } from './constants/test-data/wapi-integrationV2-export';
import { IntegrationV2ExportDialogData } from './constants/test-data/wapi-integrationV2-export-dialog';
import { IIntegrationType } from './services/endpoint.models';
import { Environment, IEnvironment } from './services/environment.model';
import { EnvironmentService } from './services/environment.service';
import { ITestdata } from './services/test-data.model';
import { IUsecase } from './services/usecase.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

