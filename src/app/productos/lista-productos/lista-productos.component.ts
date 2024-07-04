import { Component } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { IProductos } from '../../modelos/productos';
import { ICategorias } from '../../modelos/categorias';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  constructor(private productosService : ProductosService){}

  lstProductos : IProductos [] = [];
  lstProductosFiltrados : IProductos [] = [];
  filtroNombre:string = '';

  lstCategorias : ICategorias [] = [];
  categoriasSeleccionadas: number[] = [];

  ngOnInit(): void {
    this.obtenerProductos(); 
    this.obtenerCategorias();
  }

  obtenerProductos(){
    this.productosService.getList().subscribe({
      next:(data) => {
        this.lstProductos = data;
        this.lstProductosFiltrados = data;
      }, 
      error: (e) => {console.log(e);} 
    })
  }

  obtenerProductosCategoria(categoriasSeleccionadas:number[]){
    this.productosService.getListCategoria(categoriasSeleccionadas).subscribe({
      next:(data) => {
        this.lstProductos = data;
        this.lstProductosFiltrados = data;
      }, 
      error: (e) => {console.log(e);} 
    })
  }

  obtenerCategorias() {
    this.productosService.geCategorias().subscribe({
      next: (data) => {
        this.lstCategorias = data.map(categoria => ({
          ...categoria,
          seleccionada: false  
        }));
      }, 
      error: (e) => {
        console.log(e);
      } 
    });
  }

 
  buscarProductos(titulo: string) {
    if (titulo.trim() === '') {
      this.lstProductosFiltrados = [...this.lstProductos];
    } else {
      // Filtra los videos por título
      this.lstProductosFiltrados = this.lstProductos.filter(p =>
        p.nombre.toLowerCase().includes(titulo.toLowerCase())
      );
    }
  }
  
  buscarPorCategoria(idCategoria: number) {
    const index = this.categoriasSeleccionadas.indexOf(idCategoria);
    if (index !== -1) {
      this.categoriasSeleccionadas.splice(index, 1); // Elimina el elemento si ya está presente
    } else {
      this.categoriasSeleccionadas.push(idCategoria); // Agrega el elemento si no está presente
    }
    
    //  this.mostrarAlerta();

    if (this.categoriasSeleccionadas.length === 0) {
      this.obtenerProductos(); 
    }else{
      this.obtenerProductosCategoria(this.categoriasSeleccionadas);
    }  
    
  }

  

  mostrarAlerta() {
    const categoriasSeleccionadasText = this.categoriasSeleccionadas.join(',');
    alert(`Categorías seleccionadas: ${categoriasSeleccionadasText}`);
  }


  
  
}
