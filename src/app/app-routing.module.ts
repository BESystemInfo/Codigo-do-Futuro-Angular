import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificacoesComponent } from './certificacoes/certificacoes.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { OutroscursosComponent } from './outroscursos/outroscursos.component';
import { SkillsComponent } from './skills/skills.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: '/sobre', pathMatch: 'full' },
  { path: 'navegacao', component: NavegacaoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'experiencias', component: ExperienciasComponent },
  { path: 'formacao', component: FormacaoComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'outroscursos', component: OutroscursosComponent },
  { path: 'certificacoes', component: CertificacoesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }