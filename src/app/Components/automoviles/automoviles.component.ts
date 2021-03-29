import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Modelos/Vehiculo';
import { VehiculoService } from '../../Service/vehiculo.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.css']
})

export class AutomovilesComponent implements OnInit {

  opcionSeleccionada: string='¿Que tipo de vehiculo es el que buscas?';

  vehiculos: Vehiculo[];

  constructor(private service:VehiculoService, private router: Router) { }

  selecccionOpcion(event: any){
    this.opcionSeleccionada = event.target.value;
    //Obtencion de los vehiculos por categoria
    this.service.getVehiculosByCategoria(this.opcionSeleccionada)
    .subscribe(data=>{
      this.vehiculos=data;
    })
  }

  ngOnInit(): void {
    
  }

}
