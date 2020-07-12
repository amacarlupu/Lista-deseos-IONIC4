import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../services/lista-deseos.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {

   // Objeto en forma de arreglo que contiene las listas del servicio
   listaPendientes=[];
   visualizar:boolean=false;

  constructor(private _listaDeseos:ListaDeseosService,
    private router:Router) { 

      this.listaPendientes=_listaDeseos.listas;

    }

  ngOnInit() {
  }

  irAgregar(){
    this.router.navigate(['tabs/pendientes/agregar']);
  }

  verDetalle( lista, idx){

    console.log(lista+" "+idx);
    let navigationExtras: NavigationExtras = { state: { lista, idx } };
    this.router.navigate(['/tabs/pendientes/detalle'], navigationExtras);

    // this.router.navigate(['/tabs/pendientes/detalle', { lista,idx }]);
    
  }


  verItems(){
this.visualizar=true;
  }

}
