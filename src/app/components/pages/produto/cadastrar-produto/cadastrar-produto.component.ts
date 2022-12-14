import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../../../../models/Produto";

@Component({
    selector: 'app-cadastrar-produto',
    templateUrl: './cadastrar-produto.component.html',
    styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

    rotulo!: string;
    quantidade!: number;
    preco!: number;
    marca!: string;
    Produto: Produto = {
        rotulo: "",
        produtoId: 0,
        quantidade: 0,
        preco: 0,
        marca: ""

    }

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

    }

    cadastrar(): void {
        this.Produto = {
            produtoId: 0,
            rotulo: this.rotulo,
            preco: this.preco,
            marca: this.marca,
            quantidade: this.quantidade
        }
        this.http.post<Produto>("https://localhost:5001/api/produto/cadastrar", this.Produto)
            .subscribe({next: (Produto) => {
                alert("Cadastrado!")
        }})
    }


}
