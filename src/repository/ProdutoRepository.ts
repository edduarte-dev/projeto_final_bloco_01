
import { Produto } from "../model/Produto";
import { IRepository } from "../repository/IRepository";




export class ProdutoRepository implements IRepository<Produto> {
  private produtos: Produto[] = [];

  listar(): Produto[] {
    return this.produtos;
  }

  adicionar(item: Produto): void {
    this.produtos.push(item);
  }

  remover(id: number): boolean {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      return true;
    }
    return false;
  }
}
