import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { ProductosPages } from './pages/productos-pages/productos-pages';
import { Error404Page } from './pages/error404-page/error404-page';
import { loginGuardGuard } from './guard/login-guard-guard';
import { CarritoPages } from './pages/carrito-pages/carrito-pages';
import { DetallesPage } from './pages/detalles-page/detalles-page';

export const routes: Routes = [
    {path: 'home', component: HomePage},
    {path: 'register', component: RegisterPage},
    {path: 'login', component: LoginPage},
    {path: 'carrito', component: CarritoPages},
    {path: 'detalles/:id', component: DetallesPage},
    {path: 'productos', component: ProductosPages, canActivate: [loginGuardGuard]},

    {path: '**', component: Error404Page}
];
