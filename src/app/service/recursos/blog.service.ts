import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Entradas } from 'src/app/models/entradas';
import { Recientes } from 'src/app/models/recientes';
import { Comentarios } from 'src/app/models/comentarios';
import { catchError } from 'rxjs/operators';
import { Busqueda } from 'src/app/models/busqueda';
import { Categorias } from 'src/app/models/categorias';
import { ErrorHttpCliente } from 'src/app/models/errorHttpCliente';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string = "http://localhost:8090/api/blog/";
  estado: boolean = true;
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(private http: HttpClient) { }

  public obtenerEntradas(): Observable<Entradas[]> {
    return this.http.get<Entradas[]>(`${this.url}blogs-psicologia/${this.estado}`);
  }

  public obtenerEntradaPorSlug(slug: string): Observable<Entradas> {
    return this.http
      .get<Entradas>(`${this.url}blog-entrada/${slug}/${this.estado}`)
      .pipe(
        catchError(error => {
          let errorMsg: ErrorHttpCliente = new ErrorHttpCliente();
          if (error.error instanceof ErrorEvent) {
            errorMsg.error = error.status;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }
          return throwError(errorMsg);
        })
      );
  }

  public obtenerRecientes(page?: string): Observable<Recientes[]> {
    return this.http.get<Recientes[]>(`${this.url}ultimos-post/${page}`)
  }

  public listarComentarios(slug: string): Observable<Comentarios[]> {
    return this.http
      .get<Comentarios[]>(`${this.url}comentarios-mostrar/${slug}`)
      .pipe(
        catchError(error => {
          let errorMsg: ErrorHttpCliente = new ErrorHttpCliente();
          if (error.error instanceof ErrorEvent) {
            errorMsg.error = error.status;
          } else {
            errorMsg = this.getServerErrorMessage(error);
          }
          return throwError(errorMsg);
        })
      );
  }

  public guardarComentario(comentario: Comentarios): Observable<Comentarios> {
    return this.http.
      post<Comentarios>(`${this.url}guardar-comentario`, comentario, this.httpOptions)
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      );
  }

  public buscarPost(busqueda: string): Observable<Busqueda[]> {
    return this.http.get<Busqueda[]>(`${this.url}buscar-post/${busqueda}`)
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      );
  }

  public listarCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.url}listar-categorias`);
  }

  public listarCategoriaDetalle(categoria: string): Observable<Entradas[]> {
    return this.http.get<Entradas[]>(`${this.url}listar-detalle-categorias/${categoria}/${this.estado}`)
  }

  private getServerErrorMessage(error: HttpErrorResponse): ErrorHttpCliente {
    const errores: ErrorHttpCliente = new ErrorHttpCliente();
    errores.mensaje = error.message;
    errores.error = error.status;
    switch (error.status) {
      case 404: {
        return errores;
      }
      case 403: {
        return errores;
      }
      case 500: {
        return errores;
      }
      default: {
        return errores;
      }

    }
  }
}
