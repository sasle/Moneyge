import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboComponentComponent } from './jumbo-component.component';

describe('JumboComponentComponent', () => {
  let component: JumboComponentComponent;
  let fixture: ComponentFixture<JumboComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
