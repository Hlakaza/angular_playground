import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderloginregComponent } from './headerloginreg.component';

describe('HeaderloginregComponent', () => {
  let component: HeaderloginregComponent;
  let fixture: ComponentFixture<HeaderloginregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderloginregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderloginregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
