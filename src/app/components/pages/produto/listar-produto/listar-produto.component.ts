import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../../../../models/Produto";
import {Usuario} from "../../../../models/Usuario";

@Component({
    selector: 'app-listar-produto',
    templateUrl: './listar-produto.component.html',
    styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
    produtos: Produto[] = [];
    usuario!: Usuario;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<Produto[]>("https://localhost:5001/api/produto/listar")
            .subscribe({next: (produtos) => {
                    this.produtos = produtos;
                }}
            )
    }

    adicionarAoCarrinho(Produto: number): void{
        this.http.post<Produto>("https://localhost:5001/api/produto/adicionar", Produto)
            .subscribe({next:(Produto) => {
                    alert("OK")
                    this.ngOnInit();
                }}
            )
    }


}
