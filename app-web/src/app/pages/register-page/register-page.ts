import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  private service = inject(FirebaseAuthService)

  email = ""
  password = ""

  register(datos: NgForm){
    this.service.register(datos.value)
  }

}
