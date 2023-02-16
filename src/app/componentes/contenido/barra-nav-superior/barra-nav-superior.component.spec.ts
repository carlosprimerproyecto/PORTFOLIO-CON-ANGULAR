import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavSuperiorComponent } from './barra-nav-superior.component';

describe('BarraNavSuperiorComponent', () => {
  let component: BarraNavSuperiorComponent;
  let fixture: ComponentFixture<BarraNavSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
