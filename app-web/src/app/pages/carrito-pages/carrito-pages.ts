import { Component, inject } from '@angular/core';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carrito-pages',
  imports: [RouterLink],
  templateUrl: './carrito-pages.html',
  styleUrl: './carrito-pages.css',
})
export class CarritoPages {

  private service = inject(FirebaseDataService)

  carrito = this.service.getServicios()

  carritoArreglo = Object.entries(this.carrito).map( ([key, val]) =>({
    id: key,
    nombre: val.nombre,
    ciudad: val.ciudad,
    precio: val.precio
  }) )

   eliminar(id: String){
    this.service.eliminar(id)
    alert("Se borro correctamente")
    location.reload()
  }

  calcularTotal(): number {
  let total = 0;
  for (let item of this.carritoArreglo) {
    const precioNumerico = parseFloat(item.precio.replace('USD', ''));
    if (!isNaN(precioNumerico)) {
      total += precioNumerico;
    }
  }
  return total;
}
}
