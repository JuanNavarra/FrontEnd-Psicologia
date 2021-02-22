import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { IPodcast } from 'src/app/models/ipodcast';
import { PodcastService } from 'src/app/service/recursos/podcast.service';

@Component({
	selector: 'app-podcast',
	templateUrl: './podcast.component.html',
	styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit, OnDestroy {

	faPlayCircle = faPlayCircle;
	subscription$: Subscription;
	entradas: IPodcast[] = [];
	public page: number;

	constructor(
		private podcastService: PodcastService
	) { }

	ngOnInit(): void {
		this.subscription$ = this.podcastService.obtenerEntradasPodcast()
			.subscribe(data => {
				this.entradas = data;
			});
	}

	/**
	* Metodo para desubscribir
	*/
	ngOnDestroy() {
		if (this.subscription$) {
			this.subscription$.unsubscribe();
		}
	}
}
