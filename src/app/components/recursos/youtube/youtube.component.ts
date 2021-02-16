import { Component, OnInit } from '@angular/core';
import { IYoutube } from 'src/app/models/iyoutube';
import { YoutubeService } from 'src/app/service/recursos/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  entradas: IYoutube[] = [];
  public page: number;

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this.youtubeService.obtenerEntradas().subscribe(data => {
      this.entradas = data;
    })
  }
}

