import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDLCComponent } from './sdlc.component';

describe('SDLCComponent', () => {
  let component: SDLCComponent;
  let fixture: ComponentFixture<SDLCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDLCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
