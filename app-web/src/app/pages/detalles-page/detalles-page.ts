import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalles-page.html',
  styleUrl: './detalles-page.css',
})
export class DetallesPage {

  
  private service = inject(FirebaseDataService)
  private ruta = inject(ActivatedRoute)

  parametro = this.ruta.snapshot.paramMap.get("id")
  medico: any = this.service.getUnicoServicio(this.parametro)

  
  id= ""
  nombre = ""
  ciudad=""
  precio=0
  
  ngOnInit(){
  }

  editar(medico: NgForm){
    this.service.editar(medico.value)
    alert("Se edito correctamente")
  }

 

}
