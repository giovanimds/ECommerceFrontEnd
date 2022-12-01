import {Usuario} from "./Usuario";
import {Produto} from "./Produto";

export interface Historico{

    historicoId: number;
    produtos: Produto[];
    email: string;


}