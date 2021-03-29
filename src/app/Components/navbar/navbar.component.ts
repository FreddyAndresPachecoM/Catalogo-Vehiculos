import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Modelos/Vehiculo';
import { VehiculoService } from '../../Service/vehiculo.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  marcaVehiculo: string = "";
  vehiculos : Vehiculo[];
  constructor(private service: VehiculoService, private router: Router) { }

  ngOnInit() {
    
  }

  //Sirve para buscar vehiculos por marca 
  buscarByMarca(){
    alert(this.marcaVehiculo);

    this.service.getVehiculosByMarca(this.marcaVehiculo)
    .subscribe(data=>{
      this.vehiculos=data;
    })
  }

}
