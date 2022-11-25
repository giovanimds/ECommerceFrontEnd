import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export interface Carrinho{

    CarrinhoId: number;

    UsuarioId: number;
    Usuario: Usuario;

    Produtos: Produto[];

}