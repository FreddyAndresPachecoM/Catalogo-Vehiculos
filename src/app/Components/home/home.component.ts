import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/Modelos/Vehiculo';
import { VehiculoService } from '../../Service/vehiculo.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehiculos: Vehiculo[];  
  constructor(private service: VehiculoService, private router: Router ) { }

  //Inicializa el componente con los vehiculos existentes
  ngOnInit(): void {
    this.service.getVehiculos()
    .subscribe(data=>{
      this.vehiculos=data;
    })
  }

}
