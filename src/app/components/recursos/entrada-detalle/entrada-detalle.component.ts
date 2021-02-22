import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
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
  title: string;
  comentarios: Comentarios[] = [];
  errorMsg: string;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private _route: Router,
    private titulo: Title,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.titulo.setTitle('EPSP | POSTS');
    this.recibeEntrada(this.slug);
    
  }
  
  recibeEntrada(slug: string): void {
    this.blogService.obtenerEntradaPorSlug(slug).subscribe(data => {
      this.entrada = data
      this.entrada.descripcion = this.sanitizer.bypassSecurityTrustHtml(data.descripcion.toString());
      this.title = data.titulo
    }, (error: ErrorHttpCliente) => {
      if (error.error == 404)
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

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44329/${serverPath}`;
  }
}
