import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios';
import { Entradas } from 'src/app/models/entradas';
import { ErrorHttpCliente } from 'src/app/models/errorHttpCliente';
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
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private _route: Router) {
  }

  ngOnInit(): void {
    this.recibeEntrada(this.slug);
  }

  recibeEntrada(slug: string): void {
    this.blogService.obtenerEntradaPorSlug(slug).subscribe(data => {
      this.entrada = data;
    }, (error: ErrorHttpCliente) => {
      if(error.error == 404)
        this._route.navigate(['blog/entrada/'])
    })
  }

  recibirComentarios(slug: string): void {
    this.blogService.listarComentarios(slug).subscribe(data => {
      this.comentarios = data;
      this.slug = slug;
    }, (error: ErrorHttpCliente) => {
    })
  }
}
