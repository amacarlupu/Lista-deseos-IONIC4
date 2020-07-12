import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista, ListaItem } from '../../clases/index';
import { ListaDeseosService } from '../../services/lista-deseos.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  idx:number;
  lista:Lista;

  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router,
    private _listaDeseos:ListaDeseosService,
    public alertController:AlertController,
    public navCtrl:NavController
    ) {

      // Obtener los parametros enviados en pendientes.ts
      this.activateRoute.queryParams.subscribe(params => {

        if (this.router.getCurrentNavigation().extras.state) {

          this.idx=this.router.getCurrentNavigation().extras.state.idx;
          this.lista= this.router.getCurrentNavigation().extras.state.lista;
         console.log(this.lista); 
         console.log(this.idx);
        }
      });
  }

  ngOnInit() {
  }

  actualizar( item:ListaItem){

    // Volverlo true para que se tome como realizado
    item.completado=!item.completado;

    // Cuando todos los items esten marcados (true) quitarlo
    // de la pantalla pendientes.page
    let todosMarcados=true;
    
    // Recorrer la lista.items para ver si todos estan marcados (true)
    // El "let item" solo afecta a este espacio de codigo
    for(let item of this.lista.items){
      // Si item.completado es falso quiere decir que no esta marcado y sale
      if( !item.completado ){
        todosMarcados=false;
        break;
      }
    }

    // Si item.completado es "true" parasara hasta aca y se actualiza
    // el campo  this.lista.terminado como "true"
    this.lista.terminado=todosMarcados;
    // Actualizar el Local Storage con nueva data
    this._listaDeseos.actualizarData();
  }


  async borrarItem(){
    
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: this.lista.nombre,
        message: `La lista <strong> ${this.lista.nombre} </strong> se eliminará!!!`,
        buttons: ['Cancelar',
          {
            text: 'Eliminar',
            handler: () => {
              // Eliminar lista usando funcion del servicio ListaDeseos
              this._listaDeseos.eliminarLista( this.idx );
              this.navCtrl.pop(); // Regresar a la pantalla anterior
            }
          }
        ]
      });
  
      await alert.present();
    }
  

}


