import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminadosPageRoutingModule } from './terminados-routing.module';

import { TerminadosPage } from './terminados.page';

// Pipe
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminadosPageRoutingModule,
    PipesModule
  ],
  declarations: [TerminadosPage]
})
export class TerminadosPageModule {}
