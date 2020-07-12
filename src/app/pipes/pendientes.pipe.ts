import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';


@Pipe(
    {name: 'pendientes',
    pure: false
})

// Pipe recibe de parametros un objeto de tipo lista 
// y el valor por defecto de estado es null
export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], estado:boolean=false): Lista[] {
        
        // Variable del tipo Lista[] vacio
        let nuevaLista:Lista[]=[];

        for( let lista of listas ){

            // Si la lista.terminado es false quiere decir que no esta
            // completado y se muestra en pendientes.page
            if( lista.terminado === estado){
                nuevaLista.push(lista);
            }
        }
        return nuevaLista;
    }
}