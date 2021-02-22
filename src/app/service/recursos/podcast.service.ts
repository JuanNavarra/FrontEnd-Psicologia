import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPodcast } from 'src/app/models/ipodcast';

@Injectable({
	providedIn: 'root'
})
export class PodcastService {

	private url: string = "https://localhost:44329/api/podcast/";
	estado: boolean = true;

	constructor(private http: HttpClient) { }

	public obtenerEntradasPodcast(): Observable<IPodcast[]> {
		return this.http.get<IPodcast[]>(`${this.url}podcast-psicologia/${this.estado}`);
	}
}
