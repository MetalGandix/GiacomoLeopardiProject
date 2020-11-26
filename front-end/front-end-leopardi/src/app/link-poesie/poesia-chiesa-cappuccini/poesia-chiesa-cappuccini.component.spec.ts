import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaChiesaCappucciniComponent } from './poesia-chiesa-cappuccini.component';

describe('PoesiaChiesaCappucciniComponent', () => {
  let component: PoesiaChiesaCappucciniComponent;
  let fixture: ComponentFixture<PoesiaChiesaCappucciniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaChiesaCappucciniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaChiesaCappucciniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
