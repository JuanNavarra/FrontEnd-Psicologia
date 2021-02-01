import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entradas } from 'src/app/models/entradas';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-detalle-categorias',
  templateUrl: './detalle-categorias.component.html',
  styleUrls: ['./detalle-categorias.component.css']
})
export class DetalleCategoriasComponent implements OnInit {

  categoria: string = this.route.snapshot.paramMap.get('categoria');
  categorias: Entradas[]= [];
  public page: number;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.listarCategoriaDetalle(this.categoria).subscribe(data =>{
      this.categorias = data;
    })
  }

}
