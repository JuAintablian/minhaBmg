import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesEmprestimoComponent } from './informacoes-emprestimo.component';

describe('InformacoesEmprestimoComponent', () => {
  let component: InformacoesEmprestimoComponent;
  let fixture: ComponentFixture<InformacoesEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
