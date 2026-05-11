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
    if(acao == 1){
        let titulo = prompt(`Qual o título do livro: `);
        let autor = prompt(`Qual o nome do autor: `)
        let genero = prompt(`Qual o gênero do livro: `)
        let anoPub = parseInt(prompt(`Qual o  ano de laçamento do livro: `))
        let numPaginas = parseInt(prompt(`Qual o número de página do livro: `))

        livros.push(new Livro(titulo, autor, genero, anoPub, numPaginas));
    }
}