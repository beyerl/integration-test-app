import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationV2EndpointComponent } from './integrationv2-endpoint.component';

describe('IntegrationV2EndpointComponent', () => {
  let component: IntegrationV2EndpointComponent;
  let fixture: ComponentFixture<IntegrationV2EndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationV2EndpointComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationV2EndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
