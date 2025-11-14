import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { colors } from "./src/util/Colors";
import { Cerveja } from "./src/model/Cerveja";
import { ProdutoRepository } from "./src/repository/ProdutoRepository";

const repo = new ProdutoRepository();

repo.adicionar(new Cerveja(1, "IPA", "Ale"));
repo.adicionar(new Cerveja(2, "Pilsen", "Lager"));
repo.remover(1);





export function main() {
  const produtoController = new ProdutoController();
  let opcao: number;




  while (true) {
    console.log(colors.bg.black, colors.fg.yellowstrong, "*****************************************************");
    console.log("            TELE TRAGO DEV SOLITÁRIO              ");
    console.log("*******************************************************");
    console.log("            1 - Listar Produtos                   ");
    console.log("            2 - Adicionar Produto ao Carrinho     ");
    console.log("            3 - Remover Produto                   ");
    console.log("            4 - Finalizar Compra                  ");
    console.log("            5 - Sair                              ");
    console.log("*******************************************************");
    console.log("                                              ", colors.reset);

    opcao = readlinesync.questionInt("\nEscolha uma opção: ");

    if (opcao === 5) {
      console.log("\nObrigado por visitar o Dev Solitário. \nVolte Sempre!");
      return;
    }

    switch (opcao) {
      case 1:
        console.log("\nLista de Cervejas Disponíveis:\n");
        produtoController.listarProdutos().forEach((p) => {
          console.log(`${p.id} - ${p.nome}`);
        });
        keyPress();
        break;
      case 2:
        console.log("\nAdicionar Cerveja ao Carrinho:\n");
        produtoController.listarProdutos().forEach((p) => {
          console.log(`${p.id} - ${p.nome}`);
        });
        const numProduto = readlinesync.questionInt("Digite o número da Cerveja para adicionar ao carrinho: ");
        if (produtoController.adicionarAoCarrinho(numProduto)) {
          console.log("Cerveja Adicionada!");
        } else {
          console.log("Produto inválido!");
        }
        keyPress();
        break;
      case 3:
        console.log("\nRemover Produto\n");
        const nomeProduto = readlinesync.question("Digite o nome do produto que deseja remover: ");
        if (produtoController.removerProduto(nomeProduto)) {
          console.log(`✔ Produto "${nomeProduto}" removido com sucesso!`);
        } else {
          console.log(" Produto não encontrado!");
        }
        keyPress();
        break;
      case 4:
        console.log("\nSeu Carrinho:\n");
        const carrinho = produtoController.listarCarrinho();
        if (carrinho.length === 0) {
          console.log("Seu carrinho está vazio!");
          keyPress();
          break;
        }
        carrinho.forEach((p) => console.log(`${p.id} - ${p.nome}`));
        const concluir = readlinesync.question("\nConcluir Compra? (s/n): ");
        if (concluir.toLowerCase() === "s") {
          const endereco = readlinesync.question("Digite seu endereço: ");
          console.log(`\nCompra Concluída, pagamento na entrega no endereço: ${endereco}`);
          produtoController.limparCarrinho();
        } else {
          console.log("\nCompra cancelada. Voltando ao menu principal...");
        }
        keyPress();
        break;
      default:
        console.log("\nOpção inválida! Tente novamente.");
        keyPress();
    }
  }
}

function keyPress(): void {
  console.log("\nPressione ENTER para continuar...");
  readlinesync.prompt();
}

main();
