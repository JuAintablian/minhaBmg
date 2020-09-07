import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContainerComponent } from './landingPage/page.container.component';
import { SharedModule } from './shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DadosEmpresaComponent } from './cadastro/dados-empresa/dados-empresa.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InformacoesAdicionaisComponent } from './cadastro/informacoes-adicionais/informacoes-adicionais.component';
import { ServicosAdicionaisComponent } from './cadastro/servicos-adicionais/servicos-adicionais.component';
import { InformacoesEmprestimoComponent } from './cadastro/informacoes-emprestimo/informacoes-emprestimo.component';
import { ResumoComponent } from './cadastro/resumo/resumo.component';
import { AnaliseCreditoComponent } from './analise-credito/analise-credito.component';
import { LoginComponent } from './login/login.component';
import { MinhaBmgComponent } from './minha-bmg/minha-bmg.component';
import { DadosRepresentanteComponent } from './cadastro/dados-representante/dados-representante.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    CadastroComponent,
    DadosEmpresaComponent,
    BeneficiosComponent,
    DadosRepresentanteComponent,
    InformacoesAdicionaisComponent,
    ServicosAdicionaisComponent,
    InformacoesEmprestimoComponent,
    ResumoComponent,
    AnaliseCreditoComponent,
    LoginComponent,
    MinhaBmgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
