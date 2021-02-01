import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/recursos/blog/blog.component';
import { DetalleCategoriasComponent } from './components/recursos/detalle-categorias/detalle-categorias.component';
import { EntradaDetalleComponent } from './components/recursos/entrada-detalle/entrada-detalle.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/entrada/:slug', component: EntradaDetalleComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'blog/categorias/:categoria', component: DetalleCategoriasComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
