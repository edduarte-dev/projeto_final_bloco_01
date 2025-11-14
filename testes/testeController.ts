import { ProdutoController } from "../src/controller/ProdutoController";



const ctrl = new ProdutoController();

console.log("=== Lista inicial de produtos ===");
console.log(ctrl.listarProdutos());


console.log("\n=== Adicionando produto de índice 1 ao carrinho ===");
const ok1 = ctrl.adicionarAoCarrinho(1);
console.log("Resultado (espera true):", ok1);
console.log("Carrinho agora:", ctrl.listarCarrinho());


console.log("\n=== Tentando adicionar índice 0 (inválido) ao carrinho ===");
const ok2 = ctrl.adicionarAoCarrinho(0);
console.log("Resultado (espera false):", ok2);


console.log("\n=== Tentando adicionar índice 99 (inválido) ao carrinho ===");
const ok3 = ctrl.adicionarAoCarrinho(99);
console.log("Resultado (espera false):", ok3);


console.log("\n=== Removendo produto 'IPA' ===");
const removido1 = ctrl.removerProduto("IPA");
console.log("Resultado (espera true):", removido1);
console.log("Produtos após remoção:", ctrl.listarProdutos());


console.log("\n=== Tentando remover produto 'FakeBeer' ===");
const removido2 = ctrl.removerProduto("FakeBeer");
console.log("Resultado (espera false):", removido2);


console.log("\n=== Carrinho final ===");
console.log(ctrl.listarCarrinho());




console.log("\n=== Limpando carrinho ===");
ctrl.limparCarrinho();
console.log("Carrinho após limpar (espera array vazio):", ctrl.listarCarrinho());
