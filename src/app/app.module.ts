import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProdutoComponent } from './components/pages/produto/cadastrar-produto/cadastrar-produto.component';
import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarProdutoComponent } from './components/pages/produto/listar-produto/listar-produto.component';
import { ListarCarrinhoComponent } from './components/pages/carrinho/listar-carrinho/listar-carrinho.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    CadastrarUsuarioComponent,
    ListarProdutoComponent,
    ListarCarrinhoComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
