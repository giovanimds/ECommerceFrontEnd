import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../../../../models/Produto";

@Component({
    selector: 'app-cadastrar-produto',
    templateUrl: './cadastrar-produto.component.html',
    styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

    Produto: Produto = {
        Rotulo: "",
        ProdutoId: 0,
        Quantidade: 0,
        Preco: 0,
        Marca: ""

    }

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    cadastrar(): void {

        this.http.post<Produto>("https://localhost:5001/api/produto/cadastrar", this.Produto)
            .subscribe({next: (Produto) => {
                alert("Cadastrado!")
        }})
    }


}
