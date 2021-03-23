import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IYoutube } from 'src/app/models/iyoutube';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url: string = "http://localhost:8090/api/youtube/";
  private estado: boolean = true;

  constructor(private http: HttpClient) { }

  public obtenerEntradas(): Observable<IYoutube[]> {
    return this.http.get<IYoutube[]>(`${this.url}youtube-psicologia/${this.estado}`);
  }
}
