import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from '../app/livro-lista/livro-lista.component';
import { LivroDadosComponent } from '../app/livro-dados/livro-dados.component';

const routes: Routes = [
  { path: '', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  {path: "**",
  redirectTo: "lista"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}