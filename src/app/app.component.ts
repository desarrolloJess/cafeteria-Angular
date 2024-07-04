import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import { ContactoModule } from './contacto/contacto.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductosModule,ContactoModule,HomeModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda Coffe';
}
