import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplivegamesComponent } from './toplivegames.component';

describe('ToplivegamesComponent', () => {
  let component: ToplivegamesComponent;
  let fixture: ComponentFixture<ToplivegamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplivegamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplivegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
