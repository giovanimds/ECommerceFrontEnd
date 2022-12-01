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
        let email
        this.auth.user$.subscribe((user) =>{
            if(user == User){
                email = user.email
                this.http.get<Historico[]>("https://localhost:4200/api/historico/listar/"+email)
                    .subscribe((historico) => {
                            console.table(historico)
                            this.historico = historico
                        }
                    )
            }
        })



    }

}
