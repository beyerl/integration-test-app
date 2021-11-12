import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationV1EndpointComponent } from './integrationv1-endpoint.component';

describe('IntegrationV1EndpointComponent', () => {
  let component: IntegrationV1EndpointComponent;
  let fixture: ComponentFixture<IntegrationV1EndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationV1EndpointComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationV1EndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
