import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../Modelos/Vehiculo';
import { __assign } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }

  //Definimos las url para las peticiones Http al backend que esta en la nube de amazon 
  URLGETVEHICULOS = "http://entcatalogovehiculos-env.eba-pskjadrf.us-east-1.elasticbeanstalk.com/vehiculo/listar";
  URLGETVEHICULOSBYMARCA = "http://entcatalogovehiculos-env.eba-pskjadrf.us-east-1.elasticbeanstalk.com/vehiculo/buscarByMarca";
  URLGETVEHICULOSBYCATEGORIA = "http://entcatalogovehiculos-env.eba-pskjadrf.us-east-1.elasticbeanstalk.com/vehiculo/buscarByCategoria";
  URLPOSTVEHICULO = "http://entcatalogovehiculos-env.eba-pskjadrf.us-east-1.elasticbeanstalk.com/vehiculo/crear";
  URLGETVERIFICACION = "http://entcatalogovehiculos-env.eba-pskjadrf.us-east-1.elasticbeanstalk.com/vehiculo/verificarVehiculo";

  //Obtener todos los vehiculos 
  getVehiculos (){
    return this.http.get<Vehiculo[]>(this.URLGETVEHICULOS); 
  }
 
  //Obtener los vehiculos por marca
  getVehiculosByMarca(marca: string){
    return this.http.get<Vehiculo[]>(this.URLGETVEHICULOSBYMARCA+"/"+marca);
  }

  //Obtener los vehiculos por Categoria
  getVehiculosByCategoria(categoria: string){
    return this.http.get<Vehiculo[]>(this.URLGETVEHICULOSBYCATEGORIA+"/"+categoria);
  }

  //Crear el vehiculo
  createVehiculo(vehiculo: Vehiculo){
    return this.http.post<Vehiculo>(this.URLPOSTVEHICULO+"/?", vehiculo);
  }

  //Validación del vehiculo por marca y modelo
  verificarVehiculo(marca: string, modelo: string){
    return this.http.get<boolean>(this.URLGETVERIFICACION+"/"+marca+"/"+modelo)
  }
}
