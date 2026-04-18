import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  private http = inject(HttpClient)
  private API_PRODUCTOS = "https://jritsqmet.github.io/web-api/medico.json"

  getProducto(): Observable<any>{
    return this.http.get(this.API_PRODUCTOS)
  }

}
