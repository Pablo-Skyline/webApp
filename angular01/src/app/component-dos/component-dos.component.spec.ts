import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDosComponent } from './component-dos.component';

describe('ComponentDosComponent', () => {
  let component: ComponentDosComponent;
  let fixture: ComponentFixture<ComponentDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
