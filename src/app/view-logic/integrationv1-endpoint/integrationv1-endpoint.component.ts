import { Component, OnInit } from '@angular/core';
import { IEndpoint, IEndpointVisitor, IIntegrationType } from 'src/app/view-logic/endpoint/endpoint.models';
import { IEnvironment } from 'src/app/services/environment.model';
import { IIntegrationV1Testdata } from 'src/app/services/test-data.model';
import { IntegrationV1Data } from 'src/app/constants/test-data/wapi-integrationV1';

@Component({
  selector: 'app-integrationv1-endpoint',
  templateUrl: './integrationv1-endpoint.component.html',
  styleUrls: ['./integrationv1-endpoint.component.css']
})
export class IntegrationV1EndpointComponent implements OnInit {

  integrationV3EndpointVisitor = new IntegrationV3EndpointVisitor()

  constructor() { }

  ngOnInit(): void {
  }
}

class IntegrationV3EndpointVisitor extends IEndpointVisitor {
  public getEndpoint(environment: IEnvironment, integrationType: IIntegrationType): IEndpoint {
    const testData = this.getTestData(integrationType)
    if (!testData) throw new Error(`Testdata not found for integrationtype ${integrationType}`)

    return {
      domain: environment.domain,
      legacyUrlPath: testData.legacyUrlPath,
      integrationType,
    }
  }

  protected getTestData(integrationType: IIntegrationType): IIntegrationV1Testdata {
    return IntegrationV1Data[integrationType]
  }

  getIframeSrc(endpoint: IEndpoint) {
    return `${endpoint.domain}/${endpoint.legacyUrlPath}`
  }
}
