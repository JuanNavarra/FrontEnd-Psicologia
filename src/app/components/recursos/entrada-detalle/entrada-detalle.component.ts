import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios';
import { Entradas } from 'src/app/models/entradas';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-entrada-detalle',
  templateUrl: './entrada-detalle.component.html',
  styleUrls: ['./entrada-detalle.component.css']
})
export class EntradaDetalleComponent implements OnInit {

  entrada: Entradas = new Entradas();
  slug: string = this.route.snapshot.paramMap.get('slug');
  comentarios: Comentarios[] = [];
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.obtenerEntradaPorSlug(this.slug).subscribe(data => {
      this.entrada = data;
    })
  }

  recibeEntrada(slug: string): void{
    this.blogService.obtenerEntradaPorSlug(slug).subscribe(data =>{
      this.entrada = data;
    })
  }
  recibirComentarios(slug: string): void{
    this.blogService.listarComentarios(slug).subscribe(data => {
      this.comentarios = data;
      this.slug = slug;
    })
  }
}
