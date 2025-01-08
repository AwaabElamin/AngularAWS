import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProductViewComponent } from './mini-product-view.component';

describe('MiniProductViewComponent', () => {
  let component: MiniProductViewComponent;
  let fixture: ComponentFixture<MiniProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProductViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
