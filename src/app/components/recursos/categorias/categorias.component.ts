import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categorias[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.listarCategorias().subscribe(data => {
      this.categorias = data;
    })
  }

}
