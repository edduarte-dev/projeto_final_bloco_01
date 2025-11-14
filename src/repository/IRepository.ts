
import { Produto } from "../model/Produto";





export interface IRepository<T extends Produto> {
  listar(): T[];
  adicionar(item: T): void;
  remover(id: number): boolean;
}
