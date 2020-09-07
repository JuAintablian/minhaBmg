import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaBmgComponent } from './minha-bmg.component';

describe('MinhaBmgComponent', () => {
  let component: MinhaBmgComponent;
  let fixture: ComponentFixture<MinhaBmgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaBmgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaBmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
