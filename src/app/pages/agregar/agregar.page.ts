import { Component, OnInit } from '@angular/core';
// Importas clases de listas
import { Lista, ListaItem } from '../../clases/index'
import { AlertController,NavController } from '@ionic/angular';
import { ListaDeseosService } from 'src/app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  nombreLista:string="";
  nombreItem:string=""; // Inicializar para que no ocurra errores en agregar()
  aparecer:boolean=false; // Muestra el contenedor con los items

  // Variable temporal con los valores de los item
  items:ListaItem[]=[];
  
  
  constructor(
    public alertController: AlertController,
    public navCtrl:NavController,
    public _listaDeseos:ListaDeseosService
  ) { }

  ngOnInit() {
  }

  // Metodo para agregar valores a ListaItem
  agregar(){

    // Si no hay nada escrito retornar la funcion sin hacer nada
    if(this.nombreItem.length===0){
      return;
    }

    // Crear un objeto del tipo ListaItem
    let item=new ListaItem();
    item.nombre=this.nombreItem; // Obtener el nombre escrito en el input mediante ngModel

    this.items.push( item ); // Añadir al arreglo items
    this.nombreItem=""; // Limpiar la caja de texto para recibir otro
    this.aparecer=true; // Mostrar card con valores
  }


  // Metodo para eliminar valores de ListaItem desde app
  eliminarItem( valor:number ){
    // elimina elemento de arreglo items desde posicion "valor" y
    // elimina "1" elemento
    this.items.splice(valor,1);      
  }

  // Guardar Lista en pantalla de pendientes
  // es del tipo async por las alertas
  async guardarLista(){
      
      // Validar que la lista contenga algo escrito
    if(this.nombreLista.length===0){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Nombre de la lista',
        // subHeader: 'Subtitle',
        message: 'El nombre de la lista es necesario!',
        buttons: ['OK']
      });
  
       await alert.present();
              return;
      }

      // Si escribe alg
      let lista=new Lista( this.nombreLista); // objeto del tipo Lista
      // Igualarlo la propiedad lista.items al valor del arreglo items
      // que contiene los datos ingresados por ngModel 
      lista.items=this.items;  

      // Añadir la lista al arreglo "listas" del servicio
      // this._listaDeseos.listas.push(lista);

      this._listaDeseos.agregarLista(lista); // Añade la lista al servicio
      this.navCtrl.pop();
    }

  } 


