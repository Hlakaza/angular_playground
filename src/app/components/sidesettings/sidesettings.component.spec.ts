import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesettingsComponent } from './sidesettings.component';

describe('SidesettingsComponent', () => {
  let component: SidesettingsComponent;
  let fixture: ComponentFixture<SidesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
