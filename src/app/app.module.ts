import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/recursos/blog/blog.component';
import { BusquedaComponent } from './components/recursos/busqueda/busqueda.component';
import { UltimosPostsComponent } from './components/recursos/ultimos-posts/ultimos-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { EntradaDetalleComponent } from './components/recursos/entrada-detalle/entrada-detalle.component';
import { ComentariosComponent } from './components/recursos/comentarios/comentarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FaqsComponent } from './components/faqs/faqs.component';
import { CategoriasComponent } from './components/recursos/categorias/categorias.component';
import { DetalleCategoriasComponent } from './components/recursos/detalle-categorias/detalle-categorias.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    BlogComponent,
    BusquedaComponent,
    UltimosPostsComponent,
    EntradaDetalleComponent,
    ComentariosComponent,
    FaqsComponent,
    CategoriasComponent,
    DetalleCategoriasComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
