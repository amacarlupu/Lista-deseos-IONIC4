// Archivo contendra todos los pipes a utilizar para solo importar
// este archivo en los componentes

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceHolderPipe } from './placeholder.pipe';
import { PendientesPipe } from './pendientes.pipe';
import { TerminadosPipe } from './terminados.pipe';

@NgModule({
    declarations: [
        PlaceHolderPipe,
        PendientesPipe,
        TerminadosPipe
    ],
    imports: [ CommonModule ],
    exports: [ 
        PlaceHolderPipe, 
        PendientesPipe,
        TerminadosPipe
    ],
    providers: [],
})
export class PipesModule {}