import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaCasaLeopardiComponent } from './poesia-casa-leopardi.component';

describe('PoesiaCasaLeopardiComponent', () => {
  let component: PoesiaCasaLeopardiComponent;
  let fixture: ComponentFixture<PoesiaCasaLeopardiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaCasaLeopardiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaCasaLeopardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
