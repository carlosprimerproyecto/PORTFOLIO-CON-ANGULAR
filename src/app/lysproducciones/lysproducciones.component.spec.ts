import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LysproduccionesComponent } from './lysproducciones.component';

describe('LysproduccionesComponent', () => {
  let component: LysproduccionesComponent;
  let fixture: ComponentFixture<LysproduccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LysproduccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LysproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
