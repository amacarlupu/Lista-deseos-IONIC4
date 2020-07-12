import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas'; // Importar las listas

@Injectable()
export class ListaDeseosService {

    // Crear un objeto del tipo listas y lo inicializamos como un arreglo
    listas:Lista[]=[];

    constructor(){

        // // Crear las listas
        // let lista1=new Lista('Compras de supermercado');
        // let lista2=new Lista('Juegos de deseo');
        // let lista3=new Lista('Cosas de la universidad');

        // // Cargar las listas
        // this.listas.push(lista1);
        // this.listas.push(lista2);
        // this.listas.push(lista3);

        this.cargarData();

        console.log('Servicio inicializado!!');
    }

    // Actualizar data de LocalStorage
    actualizarData(){

        // JSON.stringify convierte en un string en formato JSON valido
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    // Actualizar el objeto listas
    cargarData(){
        
        // Validar que exista data en el LocalStorage
        if(localStorage.getItem('data')){
            this.listas=JSON.parse(localStorage.getItem('data'));
        }       
    }

    // Agregar al objeto listas un valor desde agregar component
    agregarLista(lista:Lista){
        this.listas.push(lista);
        this.actualizarData(); // Actualizar la data con nuevos valores
    }

    // Eliminar una lista mediante boton alert en detalles.page
    eliminarLista( idx:number ){
        this.listas.splice( idx, 1);
        this.actualizarData();
    }

}