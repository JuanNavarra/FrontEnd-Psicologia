import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrincipal } from '../models/iprincipal';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  private url: string = 'http://localhost:8090/api/Principal/';

  constructor(private http: HttpClient) {}

  mostrarContenidoPrincipal(): Observable<IPrincipal> {
    return this.http.get<IPrincipal>(`${this.url}mostrar-contenido-principal`);
  }
}
