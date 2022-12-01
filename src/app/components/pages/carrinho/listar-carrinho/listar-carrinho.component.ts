import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient} from "@angular/common/http";
import {Carrinho} from "../../../../models/Carrinho";
import {Historico} from "../../../../models/Historico";

@Component({
    selector: 'app-listar-carrinho',
    templateUrl: './listar-carrinho.component.html',
    styleUrls: ['./listar-carrinho.component.css']
})
export class ListarCarrinhoComponent implements OnInit {

    carrinho: Carrinho = {
        email: "",
        carrinhoId: 0,
        produtos: []
    };

    constructor(public auth: AuthService, public http: HttpClient) { }

    ngOnInit(): void {
        this.auth.user$.subscribe((user) => {
            if(user?.email !== undefined){
                this.http.get<Carrinho>("https://localhost:5001/api/carrinho/buscar/".concat(user.email))
                    .subscribe((carrinho) => {
                            this.carrinho = carrinho;
                        }
                    )
            }else{
                //TODO REDIRECT TO HOME|LOGIN
            }
        })

        this.auth.getAccessTokenSilently().subscribe((token) => {
            console.log(token)
        })

    }

    finalizar():any{
        let carrinho = this.carrinho
        carrinho = {
            carrinhoId: this.carrinho.carrinhoId,
            email: this.carrinho.email,
            produtos: []
        }
        this.auth.user$.subscribe((user) => {
            if(user?.email !== undefined){
                let historico: Historico = {
                    email: user.email,
                    historicoId: 0,
                    produtos: this.carrinho.produtos
                };

                this.http.post<Historico>("https://localhost:5001/api/historico/adicionar", historico)
                    .subscribe((carrinho) => {
                            //TODO MENSAGEM DE SUCESSO
                    })



            }else{
                //TODO REDIRECT TO HOME|LOGIN
            }

            this.http.patch<Carrinho>("https://localhost:5001/api/carrinho/renovar", carrinho)
                .subscribe((carrinho) => {
                    //TODO MENSAGEM DE SUCESSO
                    console.table(carrinho)
                })

        })
    }


}
