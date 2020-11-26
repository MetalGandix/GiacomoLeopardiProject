import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaPalazzoVenieriComponent } from './poesia-palazzo-venieri.component';

describe('PoesiaPalazzoVenieriComponent', () => {
  let component: PoesiaPalazzoVenieriComponent;
  let fixture: ComponentFixture<PoesiaPalazzoVenieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoesiaPalazzoVenieriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaPalazzoVenieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
