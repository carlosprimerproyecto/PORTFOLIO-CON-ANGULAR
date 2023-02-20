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
    return this.http.get('assets/datos/data.json') /*donde dice json  va la url de un servidor que guarde los datos*/
  }
}
