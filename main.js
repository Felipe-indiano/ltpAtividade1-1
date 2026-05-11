const Livro = require("./Livro");
const prompt = require("prompt-sync")();

const livros = [];


while(acao == 0){
    let acao = parseInt(prompt(`
        --Biblioteca---
        1 - Cadastrar livro
        2 - Listar livros
        3 - Alterar livro
        4 - Estatísticas
        0 - Sair
        `))

    if(acao == 0){
        console.log(`Fechando prograna`)
    }
}