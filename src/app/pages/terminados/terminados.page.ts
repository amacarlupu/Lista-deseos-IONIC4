import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../services/lista-deseos.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.page.html',
  styleUrls: ['./terminados.page.scss'],
})
export class TerminadosPage implements OnInit {

  // Objeto en forma de arreglo que contiene las listas del servicio
  listaPendientes=[];


  constructor(private _listaDeseos:ListaDeseosService,
    private router:Router) {

    this.listaPendientes=_listaDeseos.listas;
   }

  ngOnInit() {
  }

  verDetalle( lista, idx){

    console.log(lista+" "+idx);
    let navigationExtras: NavigationExtras = { state: { lista, idx } };
    this.router.navigate(['/tabs/pendientes/detalle'], navigationExtras);

    // this.router.navigate(['/tabs/pendientes/detalle', { lista,idx }]);
    
  }


}
