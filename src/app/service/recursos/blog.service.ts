import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entradas } from 'src/app/models/entradas';
import { Recientes } from 'src/app/models/recientes';
import { Comentarios } from 'src/app/models/comentarios';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string = "https://localhost:44329/api/blog/";
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(private http: HttpClient) { }

  obtenerEntradas(): Observable<Entradas[]> {
    return this.http.get<Entradas[]>(`${this.url}blogs-psicologia`);
  }
  obtenerEntradaPorSlug(slug: string): Observable<Entradas>{
    return this.http.get<Entradas>(`${this.url}blog-entrada/${slug}`)
  }
  obtenerRecientes(): Observable<Recientes[]>{
    return this.http.get<Recientes[]>(`${this.url}ultimos-post`)
  }
  listarComentarios(slug: string): Observable<Comentarios[]>{
    return this.http.get<Comentarios[]>(`${this.url}comentarios-post/${slug}`)
  }
  guardarComentario(comentario: Comentarios): Observable<Comentarios> {
    return this.http.
      post<Comentarios>(`${this.url}guardar-comentario`, comentario, this.httpOptions)
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      );
  }
}
