import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointNavComponent } from './endpoint-nav.component';

describe('EndpointNavComponent', () => {
  let component: EndpointNavComponent;
  let fixture: ComponentFixture<EndpointNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndpointNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
