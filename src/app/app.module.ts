import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { OutroscursosComponent } from './outroscursos/outroscursos.component';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SobreComponent,
    ExperienciasComponent,
    FormacaoComponent,
    SkillsComponent,
    HobbiesComponent,
    OutroscursosComponent,
    CertificacoesComponent,
    NavegacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
