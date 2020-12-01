import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaViaRomaComponent } from './poesia-via-roma.component';

describe('PoesiaViaRomaComponent', () => {
  let component: PoesiaViaRomaComponent;
  let fixture: ComponentFixture<PoesiaViaRomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaViaRomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaViaRomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
