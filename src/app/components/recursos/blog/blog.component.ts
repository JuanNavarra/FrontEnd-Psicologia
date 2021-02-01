import { Component, OnInit } from '@angular/core';
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
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.obtenerEntradas().subscribe(data => {
      this.entradas = data;
    })
  }
}
