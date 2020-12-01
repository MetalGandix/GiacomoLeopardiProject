import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaCentroNazionaleComponent } from './poesia-centro-nazionale.component';

describe('PoesiaCentroNazionaleComponent', () => {
  let component: PoesiaCentroNazionaleComponent;
  let fixture: ComponentFixture<PoesiaCentroNazionaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaCentroNazionaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaCentroNazionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
