import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
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
    private blogService: BlogService,
    private titulo: Title,
    private sanitizer:DomSanitizer) {
  }

  ngOnInit(): void {
    this.titulo.setTitle('EPSP | ' + this.categoria.toUpperCase());
    this.blogService.listarCategoriaDetalle(this.categoria).subscribe(data =>{
      this.categorias = data;
      this.categorias.forEach(element => {
        element.descripcion = this.sanitizer.bypassSecurityTrustHtml(data
          .find(f => f.slug == element.slug)
          .descripcion.toString());
      });
    })
  }

  

}
