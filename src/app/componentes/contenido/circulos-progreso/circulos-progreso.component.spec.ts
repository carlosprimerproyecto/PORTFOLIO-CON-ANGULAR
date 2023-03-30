import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculosProgresoComponent } from './circulos-progreso.component';

describe('CirculosProgresoComponent', () => {
  let component: CirculosProgresoComponent;
  let fixture: ComponentFixture<CirculosProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirculosProgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculosProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
