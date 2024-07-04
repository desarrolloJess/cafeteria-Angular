import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../servicios/productos.service';



@NgModule({
  declarations: [
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListaProductosComponent
  ],
  providers: [
    ProductosService
  ]
})
export class ProductosModule { }



