import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Busqueda } from 'src/app/models/busqueda';
import { BlogService } from 'src/app/service/recursos/blog.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  busqueda = new FormControl('', []);
  blogBusqueda: string = "";
  busquedas: Busqueda[] = [];
  @Output() slug = new EventEmitter<string>();

  constructor(private blogService: BlogService, private router: Router) {
      this.busqueda.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
          if(data != ( null || undefined || "" )){
            this.blogBusqueda = data;
            this.blogService.buscarPost(this.blogBusqueda).subscribe(data => {
                this.busquedas = data;
            });
          }
          this.busquedas = [];
        });
  }

  ngOnInit(): void {
  }

  public obtenerSlugPost(slug: string): void {
    this.slug.emit(slug);
    this.busqueda.reset();
  }
}
