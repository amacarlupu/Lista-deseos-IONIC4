import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path:'pendientes',
        children:[
          {
            path:'',
            loadChildren:() => import('../pendientes/pendientes.module').then( m => m.PendientesPageModule)
          },
          {
            path:'agregar',
            loadChildren:() => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
          },
          {
            path:'detalle',
            loadChildren:()=> import('../detalle/detalle.module').then( m => m.DetallePageModule)
          }
        ]
      },
      {
        path:'terminados',
        loadChildren:() => import('../terminados/terminados.module').then( m => m.TerminadosPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/pendientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
