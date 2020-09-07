import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page.ContainerComponent } from './page.container.component';

describe('Page.ContainerComponent', () => {
  let component: Page.ContainerComponent;
  let fixture: ComponentFixture<Page.ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page.ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page.ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
