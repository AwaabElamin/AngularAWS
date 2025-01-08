import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniImageComponent } from './mini-image.component';

describe('MiniImageComponent', () => {
  let component: MiniImageComponent;
  let fixture: ComponentFixture<MiniImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
