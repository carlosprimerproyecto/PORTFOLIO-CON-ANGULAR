import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactosComponent } from './cotactos.component';

describe('CotactosComponent', () => {
  let component: CotactosComponent;
  let fixture: ComponentFixture<CotactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
