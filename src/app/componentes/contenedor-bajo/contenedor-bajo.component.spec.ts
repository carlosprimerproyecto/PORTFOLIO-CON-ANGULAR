import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorBajoComponent } from './contenedor-bajo.component';

describe('ContenedorBajoComponent', () => {
  let component: ContenedorBajoComponent;
  let fixture: ComponentFixture<ContenedorBajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorBajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
