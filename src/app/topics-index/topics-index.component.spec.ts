import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsIndexComponent } from './topics-index.component';

describe('TopicsIndexComponent', () => {
  let component: TopicsIndexComponent;
  let fixture: ComponentFixture<TopicsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsIndexComponent]
    });
    fixture = TestBed.createComponent(TopicsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
