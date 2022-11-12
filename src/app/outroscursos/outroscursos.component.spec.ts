import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroscursosComponent } from './outroscursos.component';

describe('OutroscursosComponent', () => {
  let component: OutroscursosComponent;
  let fixture: ComponentFixture<OutroscursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutroscursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutroscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
