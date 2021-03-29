import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AutomovilesComponent } from './Components/automoviles/automoviles.component';
import { FormularioComponent } from './Components/formulario/formulario.component'

//Creamos las rutas ha utilizar entre los componentes
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'automoviles', component: AutomovilesComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
