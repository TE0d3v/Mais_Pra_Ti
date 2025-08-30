function traduzir(palavra) {
    // Define um array com todas as letras que serão consideradas vogais.
    const vogais = ['a','e','i','o','u','y'];

    // Inicializa uma variável com -1. Este valor é usado para verificar se `findIndex` não encontrou uma vogal.
    let indiceVogal = -1;

    // Divide a palavra original em um array de caracteres. Ex: "no" -> ['n', 'o'].
    // OBS: O ideal seria usar a variável `lower` aqui (`lower.split('')`) para evitar problemas com letras maiúsculas.
    const palavras = palavra.split('');
    // Encontra o ÍNDICE da primeira letra no array que também está no array `vogais`.
    // Se nenhuma vogal for encontrada, `primeiraVogal` será -1.
    const primeiraVogal = palavras.findIndex(letra => vogais.includes(letra));

    // Cria o "prefixo" (BE - Before): pega a parte da palavra do início até ANTES da primeira vogal.
    const BE = palavra.slice(0, primeiraVogal);
    // Cria o "radical" (RE - Rest): pega o resto da palavra, começando DA primeira vogal.
    const RE = palavra.slice(primeiraVogal);

    // Retorna a nova palavra formada pelo radical + prefixo + "way".
    return RE + BE + "ay";

}

console.log(traduzir("sandwich"));