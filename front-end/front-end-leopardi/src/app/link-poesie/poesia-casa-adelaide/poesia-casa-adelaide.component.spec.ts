import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaCasaAdelaideComponent } from './poesia-casa-adelaide.component';

describe('PoesiaCasaAdelaideComponent', () => {
  let component: PoesiaCasaAdelaideComponent;
  let fixture: ComponentFixture<PoesiaCasaAdelaideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaCasaAdelaideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaCasaAdelaideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
