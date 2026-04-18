import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { db } from '../../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDataService {


  guardarServicio(producto: any) {
    set(ref(db, 'producto/' + producto.id), {
      nombre: producto.nombre,
      ciudad: producto.proveedor.ubicacion.ciudad,
      precio: producto.info.precio
    });
  }

  //Traer todos los productos
  getServicios(): Observable<any> {
    let carrito: any
    const starCountRef = ref(db, 'producto/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      carrito = data
    });
    return carrito
  }

  //Treaer unico
  getUnicoServicio(id: any): Observable<any> {
    let medico: any
    const starCountRef = ref(db, 'producto/' + id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      medico = data
    });
    return medico
  }

//editar 
editar(medico: any) {
    update(ref(db, 'producto/' + medico.parametro), {
      nombre: medico.nombre,
      ciudad: medico.ciudad,
      precio: medico.precio
    });
  }

  //eliminar
  eliminar(id: any){
    remove(ref(db, 'producto/' + id)); 
  }
}
