import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaSabatoVillaggioComponent } from './poesia-sabato-villaggio.component';

describe('PoesiaSabatoVillaggioComponent', () => {
  let component: PoesiaSabatoVillaggioComponent;
  let fixture: ComponentFixture<PoesiaSabatoVillaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaSabatoVillaggioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaSabatoVillaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
