import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  private service = inject(FirebaseAuthService)
  accesso = sessionStorage.getItem("token")

  email = ""
  password = ""

  login(datos: NgForm){
    this.service.login(datos.value)
  }

  logout(){
    this.service.cerrarSesion()
    alert("Cerraste sesion correctamente")
    location.reload()
  }

}
