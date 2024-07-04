import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductos } from '../modelos/productos';
import { ICategorias } from '../modelos/categorias';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _endpoint: string = environment.endPoint;
  private _apiurl: string = this._endpoint + "Productos/";

  constructor(private httpClient: HttpClient) { }

  //Método para invocar al endpoint de ListaProductos
  getList(): Observable<IProductos[]>{
    return this.httpClient.get<IProductos[]>(`${this._apiurl}ListaProductos`);
  }

  //Método para invocar al endpoint de ListaProductos por Categoria
  getListCategoria(categoriaIds: number[]): Observable<IProductos[]> {
    let params = new HttpParams();
    categoriaIds.forEach(id => {
      params = params.append('categoriaIds', id.toString());
    });
    return this.httpClient.get<IProductos[]>(`${this._apiurl}ListaProductosPorCategoria`, { params });
  }

  //Método para invocar al endpoint de ListaProductosLimitados
  getListProductosLimitados(cantidad:number): Observable<IProductos[]>{
    return this.httpClient.get<IProductos[]>(`${this._apiurl}ListaProductosLimitados/${cantidad}`);
  }

  //Método para invocar al endpoint de ListaCategorias
  geCategorias(): Observable<ICategorias[]>{
    return this.httpClient.get<ICategorias[]>(`${this._apiurl}ListaCategorias`);
  }



}
