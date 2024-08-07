const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem é o Protagonista da Hstoria?",
        alternativas: [
            {
                texto: "Lucas",
                afirmacao: "um jovem aventureiro chamado Lucas"
            },
            {
                texto: "Jorge",
                afirmacao: "Um explorador chamado Jorge"
            }
        ]
    },
    {
        enunciado: "Qual o objetivo do protagonista?",
        alternativas: [
            {
                texto: "Encontrar um tesouro perdido",
                afirmacao: "Em um belo dia decidiu ir em busca de um tesouro perdido, porém ele nessecitara de companheiros "
            },
            {
                texto: "Ir em busca de uma ravina onde havia itens Lendarios ",
                afirmacao: "pensou em um bom planejamento para a ravina ja que la poderia haver monstros , com isso ele vai em busca de companheiros "
            }
        ]
    },
    {
        enunciado: "Quem acompanhara o aventureiro?",
        alternativas: [
            {
                texto: "um sabio mago que vive nas montanhas ",
                afirmacao: ".Com isso ele fica sabendo da existência de um mago que vive nas montanhas e vai a sua procura ,após conhecer o mago ele o ofereceu o mapa do seu destino e jurou ajuda-lo me sua tarefa"
            },
            {
                texto: "um grande heroi do passado porém hoje fracassado",
                afirmacao: " logo em seguida ele fica sabendo da existencia de um heroi antigo do qual vai a procura , após ficar sabendo de um boato onde esse herois ficava bebendo em uma taverna vai a sua procura, o protagonista encontra o heroi em uma taverna e o recrua conta a sua vontade"
            }
        ]
    },
    {
        enunciado: "qual o obstáculo encontrado pelo caminho?",
        alternativas: [
            {
                texto: " um dragão feroz",
                afirmacao: "durante sua jornada o pobre protagonista se depara com um terrível dragão onde ele e sua companhia terão que derrotar para enim chegar ao seu destino"
            },
            {
                texto: "um exército de trolls",
                afirmacao: " enquanto seguiam o caminho para seu destino o protagonista acaba se deparando com um exército de trolls, então o aventureiro tera que derrotalos com a ajuda de sua corajosa companhia  "
            }
        ]
    },
    {
        enunciado: "Para o grande final de sua jornada oque você decidira para o desfecho da historia?",
        alternativas: [
            {
                texto: " o aventureiro percebendo uma oportunidade de acabar com a batalha parte pra cima sem pensar. ",
                afirmacao: "após um grande tempo de batalha o nosso aventureiro parte pra cima de seu inimigo tentando aplicar o golpe final, onde por não ter pensado ele acaba errando o alvo onde seu inimigo aproveita a chance e aplica um golpe fatal , deixando nosso aventureiro em um grave estado , o seu inimigo vendo que essa foi a melhor batalha de sua vida o deixa morrendo vira para o por do Sol , esse feito era o ùltimo desejo do nosso aventureiro.FIM."
            },
            {
                texto: "Após horas de batalha o nosso aventureiro vendo que não aguentariam por muito tempo a luta ele decide bolar um plano para emboscar o inimigo . ",
                afirmacao: "ele e sua companhia decidem unir suas forças em um unico golpe Final se der errado eles morrem, então nosso aventureiro pensa rapido e gira sua espada o mais rapido que pode gerando um mini tornado onde ele acaba tirando a visão de seu inimigo por um curto periodo de tempo , tempo o qual era necessario para executar o ataque, então após carregarem o ataque eles partem pra cima do inimigo desferindo com toda foça possível o golpe, pondo assim um ponto final na sua batalha , após isso o aventureiro se consagrou umn grande Herói , pois além de pegar asa suas recompensas ele derrotou um grande inimigo .FIM. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "resumindo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
