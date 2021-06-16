import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(arreglo: any[] , texto: string): unknown {
      
    if (!texto) {
        return;
    }   
    texto = texto.toLocaleLowerCase();  
    return arreglo = arreglo.filter((depaMuni) => {
      return (depaMuni.nombreMunicipio.toLowerCase().indexOf(texto.toLowerCase()) > -1  ||
            depaMuni.nombreDepartamento.toLowerCase().indexOf(texto.toLowerCase()) > -1 );
    });
  }
}