import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComponentComponent } from './string-component.component';

describe('StringComponentComponent', () => {
  let component: StringComponentComponent;
  let fixture: ComponentFixture<StringComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
