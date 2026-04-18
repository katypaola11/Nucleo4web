import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto-service';
import { CommonModule } from '@angular/common';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-pages',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos-pages.html',
  styleUrl: './productos-pages.css',
})
export class ProductosPages {

  private service = inject(ProductoService)
  private serviceFirebaseData = inject(FirebaseDataService)

   productos = this.service.getProducto()

  

  buscar = ""
  
  guardar(producto: any){
    this.serviceFirebaseData.guardarServicio(producto)
    alert("Agregaste un producto")
  }

}
