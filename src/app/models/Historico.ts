import {Usuario} from "./Usuario";
import {Produto} from "./Produto";

export interface Historico{

    HistoricoId: number;

    UsuarioId: number;
    Usuario: Usuario;

    ProdutoId: number;
    Produto: Produto;

}