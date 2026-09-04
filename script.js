const elementoPergunta = document.querySelector("#pergunta");
const elementoAlternativas = document.querySelector("#alternativas");
const elementoResultado = document.querySelector("#resultado");

let perguntaAtual = 0;

const perguntas = [

    {
        pergunta: "Você está em uma floresta. O que deseja fazer?",

        alternativas: [
            {
                texto: "Seguir pela trilha",
                proxima: 1
            },
            {
                texto: "Entrar na caverna",
                proxima: 2
            }
        ]
    },


    {
        pergunta: "Você encontrou uma ponte. O que deseja fazer?",

        alternativas: [
            {
                texto: "Atravessar a ponte",
                proxima: 3
            },
            {
                texto: "Procurar outro caminho",
                proxima: 4
            }
        ]
    },


    {
        pergunta: "Dentro da caverna existe uma luz misteriosa. Você se aproxima?",

        alternativas: [
            {
                texto: "Sim, vou investigar",
                proxima: 3
            },
            {
                texto: "Não, vou embora",
                proxima: 4
            }
        ]
    },


    {
        pergunta: "Você chegou a um castelo misterioso. O que deseja fazer?",

        alternativas: [
            {
                texto: "Entrar no castelo",
                proxima: 5
            },
            {
                texto: "Continuar pela floresta",
                proxima: 4
            }
        ]
    },


    {
        pergunta: "Você encontrou uma pequena vila. Os moradores podem ajudar.",

        alternativas: [
            {
                texto: "Pedir ajuda",
                proxima: 5
            },
            {
                texto: "Continuar sozinho",
                proxima: 5
            }
        ]
    },


    {
        pergunta: "Dentro do castelo você encontrou o tesouro! Você completou sua missão.",

        alternativas: []
    }

];

function mostraPergunta() {

    const pergunta = perguntas[perguntaAtual];

    elementoPergunta.textContent = pergunta.pergunta;

    elementoAlternativas.innerHTML = "";

    elementoResultado.textContent = "";

    if (pergunta.alternativas.length === 0) {

        elementoResultado.textContent = "🏆 Fim da missão!";

        return;
    }

    pergunta.alternativas.forEach(alternativa => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.classList.add("botao-alternativa");
        botao.addEventListener("click", () => {

            perguntaAtual = alternativa.proxima;

            mostraPergunta();

        });

        elementoAlternativas.appendChild(botao);

    });
}

mostraPergunta();
