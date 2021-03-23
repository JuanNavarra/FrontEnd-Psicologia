import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faqs } from '../models/faqs';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  
  private url: string = "http://localhost:8090/api/Principal/";
  
  constructor(private http: HttpClient) { }

  mostrarFaqs(): Observable<Faqs> {
    return this.http.get<Faqs>(`${this.url}faqs`);
  }
}
