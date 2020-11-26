import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaColleInfinitoComponent } from './poesia-colle-infinito.component';

describe('PoesiaColleInfinitoComponent', () => {
  let component: PoesiaColleInfinitoComponent;
  let fixture: ComponentFixture<PoesiaColleInfinitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaColleInfinitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaColleInfinitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
