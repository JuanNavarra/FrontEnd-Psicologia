import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/recursos/blog/blog.component';
import { EntradaDetalleComponent } from './components/recursos/entrada-detalle/entrada-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/entrada/:slug',
    component: EntradaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
