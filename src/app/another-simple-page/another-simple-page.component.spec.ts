import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSimplePageComponent } from './another-simple-page.component';

describe('AnotherSimplePageComponent', () => {
  let component: AnotherSimplePageComponent;
  let fixture: ComponentFixture<AnotherSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
