import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  constructor(private http:HttpClient) {}

  ngOnInit() {}

  obtenerDatos(): Observable<any> {
    return this.http.get('assets/datos/data.json') /*donde dice json  va la url de un servidor que guarde los datos    
      PortfolioService, el cual se encarga de obtener los datos de un archivo JSON. El servicio utiliza el HttpClient de Angular para hacer una solicitud HTTP GET al archivo data.json que se encuentra en la carpeta assets del proyecto.

    El servicio está decorado con el decorador @Injectable, lo que significa que se puede inyectar en otros componentes o servicios de Angular. El providedIn del decorador especifica que este servicio se proporciona en el nivel raíz de la aplicación.
    
    El método obtenerDatos() devuelve un Observable de tipo any, lo que significa que puede contener cualquier tipo de dato. Cuando se llama a este método, se devuelve un Observable que emite los datos obtenidos del archivo JSON.
    
    Es importante mencionar que en la línea que contiene return this.http.get('assets/datos/data.json'), la ruta 'assets/datos/data.json' es relativa a la raíz del proyecto, y se asume que el archivo JSON se encuentra en la carpeta assets/datos/. En caso de que los datos se encuentren en un servidor, se debe proporcionar la URL correspondiente en su lugar.*/
  }
}
