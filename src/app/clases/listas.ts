import { ListaItem } from './lista-items'; // importar subclase lista-item

// Clase que contiene las listas

export class Lista{
    nombre:string;
    terminado:boolean;
    items:ListaItem[]; // arreglo del tipo ListaItem

    // Constructor para inicializar el objeto en otro lado
    constructor( nombre:string ){
        this.nombre=nombre;
        this.terminado=false; // false por defecto
    }
}