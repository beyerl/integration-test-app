import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IIntegrationType } from './view-logic/endpoint/endpoint.models';
import { IUsecase } from './services/usecase.model';
import { legacyRoutingSegment } from './constants/config';
import { IntegrationV1EndpointComponent } from './view-logic/integrationv1-endpoint/integrationv1-endpoint.component';
import { IntegrationV2EndpointComponent } from './view-logic/integrationv2-endpoint/integrationv2-endpoint.component';

const routes: Routes = [
    { path: `${legacyRoutingSegment}/:integrationType`, component: IntegrationV1EndpointComponent },
    { path: ':integrationType/:usecase', component: IntegrationV2EndpointComponent },
    { path: '', redirectTo: `${IIntegrationType.Catalog}/${IUsecase.Default}`, pathMatch: 'full' },
    { path: '**', redirectTo: `${IIntegrationType.Catalog}/${IUsecase.Default}` }
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }