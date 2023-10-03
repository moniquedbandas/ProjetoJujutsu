//console.log(document)
/*OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele */

//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao'); //passa um seletor como argumento -> tem que colocar o . antes da palavra

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => { /*so funciona em um unico elemento, so q estamos tentando usar em uma lista, entao temos que usar o ForEach*/

                //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
                //precisamos primeiro pegar o botao que esta selecionado e ai retirar a classe 
                desselecionarBotao();
                desselecionarPersonagem();
                //passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
                botao.classList.add("selecionado"); //lista de classes

                

                personagens[indice].classList.add("selecionado");

        });
});

function desselecionarPersonagem() {
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
}

