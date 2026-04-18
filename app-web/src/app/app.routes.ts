import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { ProductosPages } from './pages/productos-pages/productos-pages';

import { loginGuardGuard } from './guard/login-guard-guard';
import { CarritoPages } from './pages/carrito-pages/carrito-pages';
import { DetallesPage } from './pages/detalles-page/detalles-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomePage},
    {path: 'register', component: RegisterPage},
    {path: 'login', component: LoginPage},
    {path: 'carrito', component: CarritoPages},
    {path: 'detalles/:id', component: DetallesPage},
    {path: 'productos', component: ProductosPages, canActivate: [loginGuardGuard]},

];
