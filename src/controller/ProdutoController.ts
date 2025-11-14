import { Cerveja } from "../model/Cerveja";
import { Produto } from "../model/Produto";

export class ProdutoController {
  private produtos: Produto[] = [];
  private carrinho: Produto[] = [];
  private proximoId = 1;
  
  constructor() {
    this.produtos = [
    new Cerveja(this.proximoId++, 'IPA', 'Ale'),
    new Cerveja(this.proximoId++, 'Pilsen', 'Lager'),
    new Cerveja(this.proximoId++, 'Stout', 'Ale'),
    new Cerveja(this.proximoId++, 'Weiss', 'Trigo'),
    new Cerveja(this.proximoId++, 'Helles', 'Lager')
    ];
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  adicionarAoCarrinho(indice: number): boolean {
    if (indice < 1 || indice > this.produtos.length) {
      return false;

    }
    const produtoEscolhido = this.produtos[indice - 1];
    if(!produtoEscolhido){
        return false;
    }
    this.carrinho.push(produtoEscolhido)
    return true;
  }

  removerProduto(nome: string): boolean {
    const index = this.produtos.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
      this.produtos.splice(index, 1);
      return true;
    }
    return false;
  }

  listarCarrinho(): Produto[] {
    return this.carrinho;
  }

  limparCarrinho(): void {
    this.carrinho = [];
  }
}
