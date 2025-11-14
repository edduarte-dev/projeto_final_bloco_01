import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

let cerveja: string[] = ["IPA", "Pilsen", "Stout", "Weiss", "Helles"];

export function main() {

    let opcao: number;
    let nomeCerveja: string;

    while (true) {
        console.log(colors.bg.black, colors.fg.yellowstrong,
                       "*****************************************************");
        console.log("               🍺 CERVEJARIA DEV SOLITÁRIO 🍺         ");
        console.log("*******************************************************");
        console.log("            1 - Listar Cervejas                        ");
        console.log("            2 - Adicionar Cervejas                 ");
        console.log("            3 - Remover Item                        ");
        console.log("            4 - Sair                                   ");
        console.log("*******************************************************");
        console.log("                                                     ", colors.reset);

        opcao = readlinesync.questionInt("\nEscolha uma opção: ");

        if (opcao === 4) {
            console.log("\nObrigado por visitar o Dev Solitário. \nVolte Sempre! 🍻");
            return;
        }

        switch (opcao) {

            case 1:
                console.log("\n Lista de Cervejas Disponíveis: \n");
                for (let i = 0; i < cerveja.length; i++) {
                    console.log(`${i + 1} - ${cerveja[i]}`);
                }
                keyPress();
                break;

            case 2:
                console.log("\nAdicionar Cerveja: \n");
                nomeCerveja = readlinesync.question("Digite o nome da nova cerveja: ");

                cerveja.push(nomeCerveja);

                console.log(`✔ Produto "${nomeCerveja}" adicionado com sucesso!`);
                keyPress();
                break;

            case 3:
                console.log("\n🗑 Remover Produto\n");
                nomeCerveja = readlinesync.question("Digite o nome da cerveja que deseja remover: ");

                let index = cerveja.findIndex(p => p.toLowerCase() === nomeCerveja.toLowerCase());

                if (index !== -1) {
                    cerveja.splice(index, 1);
                    console.log(`✔ Cerveja "${nomeCerveja}" removido com sucesso!`);
                } else {
                    console.log("❌ Cerveja não encontrada!");
                }

                keyPress();
                break;

            default:
                console.log("\n❌ Opção inválida! Tente novamente.");
                keyPress();
        }
    }
}

function keyPress(): void {
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();
