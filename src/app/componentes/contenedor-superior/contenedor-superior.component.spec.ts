import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSuperiorComponent } from './contenedor-superior.component';

describe('ContenedorSuperiorComponent', () => {
  let component: ContenedorSuperiorComponent;
  let fixture: ComponentFixture<ContenedorSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
