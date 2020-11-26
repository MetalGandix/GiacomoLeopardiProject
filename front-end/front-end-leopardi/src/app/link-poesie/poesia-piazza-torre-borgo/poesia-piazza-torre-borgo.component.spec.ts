import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaPiazzaTorreBorgoComponent } from './poesia-piazza-torre-borgo.component';

describe('PoesiaPiazzaTorreBorgoComponent', () => {
  let component: PoesiaPiazzaTorreBorgoComponent;
  let fixture: ComponentFixture<PoesiaPiazzaTorreBorgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaPiazzaTorreBorgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaPiazzaTorreBorgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
