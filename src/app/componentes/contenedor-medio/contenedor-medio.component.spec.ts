import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorMedioComponent } from './contenedor-medio.component';

describe('ContenedorMedioComponent', () => {
  let component: ContenedorMedioComponent;
  let fixture: ComponentFixture<ContenedorMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
