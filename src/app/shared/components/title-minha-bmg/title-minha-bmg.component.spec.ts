import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMinhaBmgComponent } from './title-minha-bmg.component';

describe('TitleMinhaBmgComponent', () => {
  let component: TitleMinhaBmgComponent;
  let fixture: ComponentFixture<TitleMinhaBmgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleMinhaBmgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleMinhaBmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
