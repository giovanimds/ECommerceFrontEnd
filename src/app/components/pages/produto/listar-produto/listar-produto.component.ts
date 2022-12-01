import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../../../../models/Produto";
import {AuthService} from "@auth0/auth0-angular";
import {RouterModule} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {createAuth0Client} from "@auth0/auth0-spa-js";
import {Carrinho} from "../../../../models/Carrinho";

@Component({
    selector: 'app-listar-produto',
    templateUrl: './listar-produto.component.html',
    styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

    produtos: Produto[] = [];

    constructor(
        private http: HttpClient,
        public auth: AuthService,
        private router: RouterModule,
        @Inject(DOCUMENT) private doc: Document
    ) {}

    ngOnInit(): void {
        this.http
            .get<Produto[]>("https://localhost:5001/api/produto/listar")
            .subscribe(
                {
                    next: (produtos) => {
                        this.produtos = produtos;
                    }
                })

    }



    adicionarAoCarrinho(Produto: number): any {
        this.auth.user$.subscribe((user) => {
            if(user?.email !== undefined){
                this.http.get<Produto>("https://localhost:5001/api/carrinho/adicionar/"+Produto.toString()+("/"+user.email))
                    .subscribe({
                            next: (Produto) => {
                                //TODO MENSAGEM DE SUCESSO
                            }
                        }
                    )
            }else{
                //TODO REDIRECT TO HOME|LOGIN
            }
        })

    }


}
