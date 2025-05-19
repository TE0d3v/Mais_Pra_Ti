const entrada = require('prompt-sync')();

let escolha = (Number(entrada("escolha 1 para pedra 2 para papel ou 3 para tesoura: ")))

switch(escolha){
    case 1:
        console.log("sua escolha foi pedra")
    break;
}