import {Component, Inject, OnInit} from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from '@angular/common';
import {Carrinho} from "../../models/Carrinho";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {


  constructor(public auth: AuthService, public http: HttpClient) {

  }

  ngOnInit(): void {
    let carrinho: Carrinho;
    this.auth.idTokenClaims$.subscribe((value) => {
      if(value?.email !== undefined){
        let email = value.email
        this.http.get<Carrinho>("https://localhost:5001/api/carrinho/buscar/".concat(email))
            .subscribe((carrinho) => {
                  if(carrinho == null || undefined){
                    carrinho = {
                      produtos: [],
                      email: email,
                      carrinhoId: 0
                    }
                    this.criarCarrinho(carrinho)


                  }
                })
      }
    })
  }

  criarCarrinho(carrinho:Carrinho): void{
    this.http.post<Carrinho>("https://localhost:5001/api/carrinho/cadastrar", carrinho)
        .subscribe((result) => {
          console.table(result)
        })
  }

  async login(): Promise<void>{
    await this.auth.loginWithRedirect();
  }


}
