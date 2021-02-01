import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Comentarios } from 'src/app/models/comentarios';
import { ErrorHttpCliente } from 'src/app/models/errorHttpCliente';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() comentarios: Comentarios[];
  @Input() slug: string;
  formComentario: FormGroup;

  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private toast: ToastrService) {
    this.builderForm();
  }


  ngOnInit(): void {
    this.blogService.listarComentarios(this.slug).subscribe(data => {
      this.comentarios = data;
    }, (error: ErrorHttpCliente) => {
    })
  }

  private builderForm() {
    this.formComentario = this.formBuilder.group({
      creador: [null, [Validators.required]],
      comentario: [null, [Validators.required]],
      email: [null, []],
      slug: [this.slug, []],
      fechacreacion: [new Date(), []],
    });
  }

  guardarComentario(event: Event) {
    event.preventDefault();
    this.formComentario.value.slug = this.slug;
    if (this.formComentario.valid) {
      this.blogService.guardarComentario(this.formComentario.value).subscribe(data => {
        if (data.estado) {
          this.toast.success(data.mensaje);
          this.comentarios.unshift(this.formComentario.value)
          this.builderForm();
        } else
          this.toast.error(data.mensaje);
      });
    } else {
      this.toast.warning("Los campos: Nombre y Comentario son requeridos");
    }
  }
}