import { Routes } from '@angular/router';
import { FormularioContactoComponent } from './contacto/formulario-contacto/formulario-contacto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'productos', component: ListaProductosComponent},
    {path: 'contacto', component: FormularioContactoComponent}
    
];
