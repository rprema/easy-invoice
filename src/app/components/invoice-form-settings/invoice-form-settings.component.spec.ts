import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormSettingsComponent } from './invoice-form-settings.component';

describe('InvoiceFormSettingsComponent', () => {
  let component: InvoiceFormSettingsComponent;
  let fixture: ComponentFixture<InvoiceFormSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFormSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
