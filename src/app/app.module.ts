import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarProdutoComponent } from './components/pages/produto/cadastrar-produto/cadastrar-produto.component';
import { CadastrarUsuarioComponent } from './components/pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarProdutoComponent } from './components/pages/produto/listar-produto/listar-produto.component';
import { ListarCarrinhoComponent } from './components/pages/carrinho/listar-carrinho/listar-carrinho.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BuscarUsuarioComponent } from './components/pages/usuario/buscar-usuario/buscar-usuario.component';
import { AuthModule } from "@auth0/auth0-angular";
import { AuthButtonComponent } from './auth/auth-button/auth-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    CadastrarUsuarioComponent,
    ListarProdutoComponent,
    ListarCarrinhoComponent,
    BuscarUsuarioComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'giovani-mrsc.us.auth0.com',
      clientId: 'sC3AXQpAAYc9ceLC6Qvr3SAsmLflM0q7'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
