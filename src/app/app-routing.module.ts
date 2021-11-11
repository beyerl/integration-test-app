import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IIntegrationType } from './services/endpoint.models';
import { IUsecase } from './services/usecase.model';

import { EndpointComponent } from './view-logic/endpoint/endpoint.component';

const routes: Routes = [
    { path: ':integrationType/:usecase', component: EndpointComponent },
    { path: '', redirectTo: `${IIntegrationType.Catalog}/${IUsecase.Default}`, pathMatch: 'full' },
    { path: '**', redirectTo: `${IIntegrationType.Catalog}/${IUsecase.Default}` }
];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }