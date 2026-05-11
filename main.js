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

    if(acao == 2){
        if(livros.length === 0){
            console.log(`Não nenhum livro cadastrado!`)
        }
        else {
            livros.forEach((livro, indice) => {
                console.log(indice + livro.getInfo())                    
            })
        }
    }
    if(acao == 3){
        const indiceLivroAlterar = parseInt(prompt(`Qual livro, gostaria de fazer alterações, passe o indice: `))

        if(isNaN(indiceLivroAlterar) || indiceLivroAlterar < 0){
            console.log(`Entrada invalida`)
        }

        else{
            const NovoTitulo = prompt(`Qual o novo título: `).trim()
            const NovoAutor = prompt(`Qual o novo autor: `).trim()
            const NovoGenero = prompt(`Qual o novo gênero do livro: `).trim()
            const NovoAnoPub = parseInt(prompt(`Qual o novo ano de laçamento: `))
            const NovoNumPaginas = parseInt(prompt(`Qual o novo número de páginas: `))
            
            if(NovoTitulo != ""){
                livros[indiceLivroAlterar].titulo = NovoTitulo
            }
            if(NovoAutor != ""){
                livros[indiceLivroAlterar].autor = NovoAutor
            }
            if(NovoGenero != ""){
                livros[indiceLivroAlterar].genero = NovoGenero
            }
            if(isNaN(NovoAnoPub) && NovoNumPaginas > 0){
                livros[indiceLivroAlterar].anoPub = NovoAnoPub
            }
            if(isNaN(NovoNumPaginas) && NovoNumPaginas > 0){
                livros[indiceLivroAlterar].numPaginas = NovoNumPaginas
            }
        }
    }

    if(acao == 4){
        if(livros.length === 0){
            console.log(`Não a livros cadastrados`)
        }
        else{
            const auxiliar = new Livro()

            let media = auxiliar.mediaNumPaginas(livros)
            console.log(`A média de páginas entre os livro é ${media}`)

            let numGeneros = auxiliar.contarPorGenero(livros)

            for(let genero in numGeneros){
                console.log(`${genero}: ${numGeneros[genero]}`)
            }
        }
    }
}