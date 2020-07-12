import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'placeholder'})
export class PlaceHolderPipe implements PipeTransform {
    transform(value: string, defecto:string):string {
        // Si contiene un value (valor ingresado por imput) mostrarlo,
        // sino mostrar valor por defecto (Nueva Lista)
        return ( value )? value: defecto;
    }
}