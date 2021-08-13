import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addProducto(producto: Producto): Observable<any> {
    return this.http.post<Producto>('http://localhost:4000/api/crear-producto', producto, this.httpOptions)
      .pipe(
        catchError(this.handleError<Producto>('Add Producto'))
      );
  }

  getProducto(id): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:4000/api/get-producto/' + id)
      .pipe(
        tap(_ => console.log(`Productos: ${id}`)),
        catchError(this.handleError<Producto[]>(`Get Producto id=${id}`))
      );
  }

  getProductoList(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:4000/api')
      .pipe(
        tap(producto => console.log('Producto listado!')),
        catchError(this.handleError<Producto[]>('Get Producto', []))
      );
  }

  updateProducto(id, producto: Producto): Observable<any> {
    return this.http.put('http://localhost:4000/api/editar-producto/' + id, producto, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Producto actualizado: ${id}`)),
        catchError(this.handleError<Producto[]>('Actualizar producto'))
      );
  }

  deleteProducto(id): Observable<Producto[]> {
    return this.http.delete<Producto[]>('http://localhost:4000/api/delete-producto/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Producto eliminado: ${id}`)),
        catchError(this.handleError<Producto[]>('Eliminar producto'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}