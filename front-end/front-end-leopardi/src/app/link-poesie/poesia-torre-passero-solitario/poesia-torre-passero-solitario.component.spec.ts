import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaTorrePasseroSolitarioComponent } from './poesia-torre-passero-solitario.component';

describe('PoesiaTorrePasseroSolitarioComponent', () => {
  let component: PoesiaTorrePasseroSolitarioComponent;
  let fixture: ComponentFixture<PoesiaTorrePasseroSolitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaTorrePasseroSolitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaTorrePasseroSolitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
