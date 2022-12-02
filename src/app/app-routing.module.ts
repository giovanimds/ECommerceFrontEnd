import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProdutoComponent} from "./components/pages/produto/listar-produto/listar-produto.component";
import {BuscarUsuarioComponent} from "./components/pages/usuario/buscar-usuario/buscar-usuario.component";
import {ListarCarrinhoComponent} from "./components/pages/carrinho/listar-carrinho/listar-carrinho.component";
import {ListarHistoricoComponent} from "./components/pages/historico/listar-historico/listar-historico.component";
import {CadastrarProdutoComponent} from "./components/pages/produto/cadastrar-produto/cadastrar-produto.component";


const routes: Routes = [
  { path:"produtos", component: ListarProdutoComponent },
  { path:"", component: ListarProdutoComponent },
  { path:"conta", component: BuscarUsuarioComponent },
  { path:"carrinho", component: ListarCarrinhoComponent },
  { path:"historico", component: ListarHistoricoComponent },
  { path:"cadastrar-produto", component: CadastrarProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
