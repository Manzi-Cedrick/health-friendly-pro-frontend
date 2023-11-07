import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideboxComponent } from './sidebox.component';

describe('SideboxComponent', () => {
  let component: SideboxComponent;
  let fixture: ComponentFixture<SideboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
