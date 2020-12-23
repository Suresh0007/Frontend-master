import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionAccountComponent } from './production-account.component';

describe('ProductionAccountComponent', () => {
  let component: ProductionAccountComponent;
  let fixture: ComponentFixture<ProductionAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
