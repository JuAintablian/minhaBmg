import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './landingPage/page.container.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DadosEmpresaComponent } from './cadastro/dados-empresa/dados-empresa.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { InformacoesAdicionaisComponent } from './cadastro/informacoes-adicionais/informacoes-adicionais.component';
import { ServicosAdicionaisComponent } from './cadastro/servicos-adicionais/servicos-adicionais.component';
import { InformacoesEmprestimoComponent } from './cadastro/informacoes-emprestimo/informacoes-emprestimo.component';
import { ResumoComponent } from './cadastro/resumo/resumo.component';
import { AnaliseCreditoComponent } from './analise-credito/analise-credito.component';
import { LoginComponent } from './login/login.component';
import { MinhaBmgComponent } from './minha-bmg/minha-bmg.component';
import { DadosRepresentanteComponent } from './cadastro/dados-representante/dados-representante.component';


const routes: Routes = [
  {
    path: '',
    component: PageContainerComponent
  },
  {
    path: 'beneficios',
    component: BeneficiosComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    children: [
      {
        path: 'dados-empresa',
        component: DadosEmpresaComponent
      },
      {
        path: 'dados-representantes',
        component: DadosRepresentanteComponent
      },
      {
        path: 'informacoes-adicionais',
        component: InformacoesAdicionaisComponent
      },
      {
        path: 'informacoes-emprestimo',
        component: InformacoesEmprestimoComponent
      },
      {
        path: 'servicos-adicionais',
        component: ServicosAdicionaisComponent
      },
      {
        path: 'resumo',
        component: ResumoComponent
      }
    ]
  },
  {
    path: 'analise-credito',
    component: AnaliseCreditoComponent
  },
  {
    path: 'minha-bmg',
    component: MinhaBmgComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
