import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Entradas } from 'src/app/models/entradas';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  entradas: Entradas[] = [];
  public page: number;

  constructor(
    private blogService: BlogService,
    private titulo: Title
    ) { }

  ngOnInit(): void {
    this.titulo.setTitle('EPSP | POSTS');
    this.blogService.obtenerEntradas().subscribe(data => {
      this.entradas = data;
    })
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44329/${serverPath}`;
  }
}
