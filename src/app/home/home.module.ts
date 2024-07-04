import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosService } from '../servicios/productos.service';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ],
  providers: [
    ProductosService
  ]
})
export class HomeModule { }
