import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService, User} from "@auth0/auth0-angular";
import {Historico} from "../../../../models/Historico";

@Component({
    selector: 'app-listar-historico',
    templateUrl: './listar-historico.component.html',
    styleUrls: ['./listar-historico.component.css']
})
export class ListarHistoricoComponent implements OnInit {

    historico: Historico[] = [];
    constructor(public http: HttpClient, public auth: AuthService) { }

    ngOnInit(): void {
        let email: string
        this.auth.user$.subscribe((user) =>{
            if(user?.email !== undefined && user.email !== null){
                email = user.email
                this.listarHistorico(email)
            }
        })



    }

    listarHistorico(email:string):void{
        this.http.get<Historico[]>("https://localhost:5001/api/historico/listar/"+email)
            .subscribe((historico) => {
                    console.table(historico)
                    this.historico = historico
                }
            )
    }

}
