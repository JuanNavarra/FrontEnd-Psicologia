import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Recientes } from 'src/app/models/recientes';
import { BlogService } from 'src/app/service/recursos/blog.service';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { PrincipalService } from 'src/app/service/principal.service';
import { IPrincipal } from 'src/app/models/iprincipal';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  recientes: Recientes[] = [];
  recientesYoutube: Recientes[] = [];
  subscription$: Subscription;
  faPlayCircle = faPlayCircle;
  principal: IPrincipal;

  constructor(
    private titulo: Title,
    private blogService: BlogService,
    private sanitizer: DomSanitizer,
    private principalService: PrincipalService
  ) {
	  this.principal = {
		  descripcion: null,
		  estado: null,
		  id: null,
		  rutaImagen: null,
		  texto: null
	  };
  }

  ngOnInit(): void {
    this.titulo.setTitle('EPSP');
    this.subscription$ = this.principalService
      .mostrarContenidoPrincipal()
      .subscribe((data) => {
        this.principal = data;
        this.principal.rutaImagen = data.rutaImagen.substring(17)
      });
    this.subscription$ = this.blogService
      .obtenerRecientes('PR')
      .subscribe((data) => {
        this.recientes = data;
        this.recientes.forEach((element) => {
          element.descripcion = this.sanitizer.bypassSecurityTrustHtml(
            data.find((f) => f.slug == element.slug).descripcion.toString()
          );
        });
      });

    this.subscription$ = this.blogService
      .obtenerRecientes('YO')
      .subscribe((data) => {
        this.recientesYoutube = data.slice(0, 4);
      });
  }

  public createMultimediaPath = (serverPath: string) => {
    return `http://localhost:8090/${serverPath}`;
  };
}
