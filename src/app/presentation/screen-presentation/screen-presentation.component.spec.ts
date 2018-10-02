import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPresentationComponent } from './screen-presentation.component';

describe('ScreenPresentationComponent', () => {
  let component: ScreenPresentationComponent;
  let fixture: ComponentFixture<ScreenPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
