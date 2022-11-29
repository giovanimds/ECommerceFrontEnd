import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProdutoComponent} from "./components/pages/produto/listar-produto/listar-produto.component";
import {BuscarUsuarioComponent} from "./components/pages/usuario/buscar-usuario/buscar-usuario.component";


const routes: Routes = [
  { path:"produtos", component: ListarProdutoComponent },
  { path:"", component: ListarProdutoComponent },
  { path:"conta", component: BuscarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
