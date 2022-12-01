import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export interface Carrinho{

    carrinhoId: number;

    email: string;

    produtos: Produto[];

}