import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAsInputComponent } from './template-as-input.component';

describe('TemplateAsInputComponent', () => {
  let component: TemplateAsInputComponent;
  let fixture: ComponentFixture<TemplateAsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
