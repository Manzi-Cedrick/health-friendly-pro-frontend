import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePatientComponent } from './table-patient.component';

describe('TablePatientComponent', () => {
  let component: TablePatientComponent;
  let fixture: ComponentFixture<TablePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
