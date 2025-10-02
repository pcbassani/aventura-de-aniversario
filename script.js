document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NOVA LISTA DE PRÊMIOS ---
    const premios = {
        falhaCritica: [ // 1
            { titulo: "Falha Crítica!", descricao: "O Mestre da Masmorra te pune! Hoje você está encarregado da missão 'Operação Louça Limpa'." },
            { titulo: "Desastre Natural (1)!", descricao: "Você tropeçou no seu próprio pé. Perdeu o direito de escolher o filme/série na nossa próxima sessão." }
        ],
        baixo: [ // 2-5
            { titulo: "Loot Quebrado", descricao: "Você achou uma poção de cura fraca. Vale um copo d'água trazido por mim." },
            { titulo: "Quase Azar", descricao: "Sua recompensa é um high-five... entusiasmado." },
            { titulo: "Equipamento Inicial", descricao: "Você ganhou um elogio sincero para aumentar sua moral de combate." }
        ],
        medio: [ // 6-9
            { titulo: "Poção Menor", descricao: "Você encontrou uma poção de vigor! Vale seu café ou bebida favorita, feita por mim." },
            { titulo: "Missão Secundária", descricao: "Você ganhou 15 minutos de cafuné ou massagem nos ombros para recuperar as energias." },
            { titulo: "Bardo Inspirador", descricao: "Você tem o direito de colocar sua música favorita para tocar agora mesmo, sem questionamentos." }
        ],
        bom: [ // 10-13
            { titulo: "Tesouro Comum", descricao: "Você ganhou uma noite de jogos! Você escolhe o jogo (tabuleiro ou vídeo), eu preparo os petiscos." },
            { titulo: "Bênção da Guilda", descricao: "Passe livre de 1 dia para a tarefa doméstica que você mais odeia." },
            { titulo: "Banquete do Aventureiro", descricao: "Vamos fazer sua sobremesa ou lanche favorito hoje à noite, por minha conta." }
        ],
        muitoBom: [ // 14-16
            { titulo: "Loot Raro!", descricao: "Você desbloqueou uma noite de cinema VIP em casa. Sua escolha de filme, com direito a pipoca, refri e tudo mais." },
            { titulo: "Chef de Elite", descricao: "Você ganhou um jantar especial, com seu prato favorito cozinhado por mim." },
            { titulo: "Poção Lendária", descricao: "uau, excelente! Agora, te devo uma brejinha. E você tem que tomar!" }
        ],
        otimo: [ // 17-19
            { titulo: "Tesouro Épico!", descricao: "Você ganhou uma massagem completa para curar todos os 'danos de batalha' da semana." },
            { titulo: "Fim de Semana Abençoado", descricao: "Você tem direito a uma manhã/tarde inteira de 'paz absoluta' no fim de semana para seu joguinho, sem interrupções." },
            { titulo: "Mestre dos Desejos", descricao: "Você ganhou um 'Pequeno Desejo'. Planejarei um encontro ou passeio surpresa baseado em algo que você ama." }
        ],
        sucessoCritico: [ // 20
            { titulo: "SUCESSO CRÍTICO!", descricao: "Os deuses sorriram para você! Você ganhou o 'Dia do Sim'. Dentro do razoável, seu desejo para uma atividade de casal é uma ordem." },
            { titulo: "Drop Lendário!", descricao: "Você encontrou um artefato mágico! Vale uma cuquinha fresquinha!" }
        ]
    };

    // --- 2. SELEÇÃO DOS ELEMENTOS ---
    const rollButton = document.getElementById('rollButton');
    const resultArea = document.getElementById('resultArea');
    const rollResultText = document.getElementById('rollResultText');
    const prizeCard = document.getElementById('prizeCard');
    const prizeTitle = document.getElementById('prizeTitle');
    const prizeDescription = document.getElementById('prizeDescription');
    const diceDisplay = document.getElementById('dice-display');

    // --- 3. LÓGICA DO BOTÃO ---
    rollButton.addEventListener('click', () => {
        diceDisplay.classList.add('rolling');
        diceDisplay.textContent = '?';
        resultArea.classList.add('hidden');

        setTimeout(() => {
            const numeroRolado = Math.floor(Math.random() * 20) + 1;

            diceDisplay.classList.remove('rolling');
            diceDisplay.textContent = numeroRolado;

            let categoriaPremios;
            let corBorda;

            // NOVA ESTRUTURA DE REGRAS
            if (numeroRolado === 1) {
                categoriaPremios = premios.falhaCritica;
                corBorda = 'border-critical-fail';
            } else if (numeroRolado <= 5) {
                categoriaPremios = premios.baixo;
                corBorda = 'border-fail';
            } else if (numeroRolado <= 9) {
                categoriaPremios = premios.medio;
                corBorda = 'border-fail';
            } else if (numeroRolado <= 13) {
                categoriaPremios = premios.bom;
                corBorda = 'border-success';
            } else if (numeroRolado <= 16) {
                categoriaPremios = premios.muitoBom;
                corBorda = 'border-success';
            } else if (numeroRolado <= 19) {
                categoriaPremios = premios.otimo;
                corBorda = 'border-critical-success';
            } else { // numeroRolado === 20
                categoriaPremios = premios.sucessoCritico;
                corBorda = 'border-critical-success';
            }

            const premioSorteado = categoriaPremios[Math.floor(Math.random() * categoriaPremios.length)];

            rollResultText.textContent = `Você rolou um ${numeroRolado}!`;
            prizeTitle.textContent = premioSorteado.titulo;
            prizeDescription.textContent = premioSorteado.descricao;

            prizeCard.className = '';
            prizeCard.classList.add(corBorda);
            resultArea.classList.remove('hidden');

        }, 600);
    });
});
