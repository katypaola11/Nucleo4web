import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {

  //login 
  login(userDatos: any) {
    signInWithEmailAndPassword(auth, userDatos.email, userDatos.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Iniciaste sesion Existosoamente")
        sessionStorage.setItem('token', 'true')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  //registro
  register(userDatos: any) {
    createUserWithEmailAndPassword(auth, userDatos.email, userDatos.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Registro Existoso")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  }

  //cerrar sesion 
  cerrarSesion() {
    signOut(auth).then(() => {
      alert("Cerraste Sesion correctamente")
      sessionStorage.removeItem("token")
    }).catch((error) => {
      // An error happened.
    });
  }

}
