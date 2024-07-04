import { Component } from '@angular/core';
import { IProductos } from '../../modelos/productos';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lstProductos : IProductos [] = [];
  constructor(private productosService : ProductosService){}

  ngOnInit(): void {
    this.obtenerProductosLimitados(); 
  }

  obtenerProductosLimitados(){
    this.productosService.getListProductosLimitados(4).subscribe({
      next:(data) => {
        this.lstProductos = data;
      }, 
      error: (e) => {console.log(e);} 
    })
  }

}
