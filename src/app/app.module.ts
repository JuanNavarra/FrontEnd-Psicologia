import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/recursos/blog/blog.component';
import { PaginacionComponent } from './components/recursos/paginacion/paginacion.component';
import { BusquedaComponent } from './components/recursos/busqueda/busqueda.component';
import { UltimosPostsComponent } from './components/recursos/ultimos-posts/ultimos-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { EntradaDetalleComponent } from './components/recursos/entrada-detalle/entrada-detalle.component';
import { ComentariosComponent } from './components/recursos/comentarios/comentarios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    BlogComponent,
    PaginacionComponent,
    BusquedaComponent,
    UltimosPostsComponent,
    EntradaDetalleComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
