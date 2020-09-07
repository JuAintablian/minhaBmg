import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosAdicionaisComponent } from './servicos-adicionais.component';

describe('ServicosAdicionaisComponent', () => {
  let component: ServicosAdicionaisComponent;
  let fixture: ComponentFixture<ServicosAdicionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosAdicionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosAdicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
