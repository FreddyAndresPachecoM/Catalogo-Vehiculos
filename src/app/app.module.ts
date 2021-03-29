import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomovilesComponent } from './Components/automoviles/automoviles.component';

import { FormsModule} from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';

import { VehiculoService } from './Service/vehiculo.service';
import { FormularioComponent } from './Components/formulario/formulario.component'



@NgModule({
  declarations: [
    AppComponent,
    AutomovilesComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule, 
    HttpClientModule
  ],
  providers: [VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
