import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from '../../Service/vehiculo.service';
import { Vehiculo } from '../../Modelos/Vehiculo';

import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Ayuda a las credenciales para su posterior conexion
  urlPrev: string = "";
  albumBucketName = 'bucketunidad2';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'bucketunidad2' },
  });

  vehiculo: Vehiculo = new Vehiculo();

  constructor( private router:Router, private service: VehiculoService) { 
    // Inicializar el proveedor de credenciales de Amazon Cognito
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:88877575-3132-4eb1-845a-5245174a1817',
    });
  }

  showImagen = false;
  error = false;
  subiendo = false;

  archivo = null;

  urlImagen = null;


  ngOnInit(): void {
  }

  onClickSubir = async (event) => {
    //Comprueba si existe un vehiculo por medio de su marca y categoria
      event.preventDefault();
      this.vehiculo.imagenCloud = "http://d1uz3xb9ocbyz.cloudfront.net/"+this.archivo.name;
      if (this.archivo) {
        try {
          console.log(this.archivo);
          this.subiendo = true;
          const data = await new AWS.S3.ManagedUpload({
            params: {
              Bucket: this.albumBucketName,
              Key: this.archivo.name,
              Body: this.archivo,
              ACL: 'public-read',
            },
          }).promise();

          this.urlImagen = data.Location;
          this.subiendo = false;
          this.showImagen = true;
        } catch (error) {
          this.error = true;
          const bucle = setInterval(() => {
            this.error = false;
            clearInterval(bucle);
          }, 2000);
        }
      } else {
        alert('SELECCIONE UN ARCHIVO');
      }
      this.guardarVehiculo();
    
  };

  //Controla el evento del combobox
  onChange = (event) => {
    /*if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }*/

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.urlPrev = event.target.result;
      }
      this.archivo = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);

    }
  };

  //////////////////////////////////////////////////////

  //Metodo para guardar el vehiculo con una peticion Http
  guardarVehiculo(){
    this.vehiculo.imagenBucket=this.urlImagen;
    this.service.createVehiculo(this.vehiculo)
    .subscribe(data=>{      
      this.router.navigate(["home"])
      alert("Se agrego el vehiculo: "+this.vehiculo.marca+" "+this.vehiculo.modelo+" Exitosamente!")
    });
  }

  //Asignacion del valor la categoria del combobox
  selecccionOpcion(event: any){
    this.vehiculo.categoria = event.target.value;
  }

}
