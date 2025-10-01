document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.querySelector('.button[src="assets/src/icons/send.svg"]')
    const inputMensagem = document.querySelector('#inputText')
    const caixaDeMensagem = document.querySelector('.conteinerDeMensagem')
    const mensagensDoBot = [
        "oi",
        "Vamos programar",
        "Eu sou O Novo Bot",
        "Tem café?",
        "Como posso te ajudar?"
    ]
    const listaDeContatos = document.querySelector('.list-contacts')
    const contatos = [
        {
            id: 1,
            foto: "src='assets/src/images/greg--james.png'",
            nome: "Lucas",
            ultimaMensagem: "Tem café?",
            ultimaHora: "Tue"
        },
        {
            id: 2,
            foto: "src='assets/src/images/david--moore.png'",
            nome: "Miguel",
            ultimaMensagem: "salvee",
            ultimaHora: "Fry"
        }
    ]
    // Actions
    botaoEnviar.addEventListener("click", () => {
        enviarMensagem()
    })

    inputMensagem.addEventListener('keydown', (event) => {
        if(event.key == "Enter"){
            enviarMensagem()
        }
    })
    
    // Functions
    function carregandoContatos() {
        const novaCaixa = document.createElement('div')
        novaCaixa.classList.add('boxContacts')
        
        contatos.forEach( (contato) => {

            novaCaixa.innerHTML = `
                
            <div class="profile">
                <img ${contato.foto}>
            </div>
    
            <div class="boxText">
                <b class="name">${contato.nome}</b>
                <p class="lastMessage">${contato.ultimaMensagem}</p>
            </div>
    
            <div class="lastItems">
                <div class="hours">${contato.ultimaHora}</div>
            </div>
    
            `
        
        })

        listaDeContatos.appendChild(novaCaixa)

    }

    function respostaDoBot(mensagem) {
            const posicao = Math.floor(Math.random() * mensagensDoBot.length)
            mensagem = mensagensDoBot[posicao]

            return mensagem
        }

    function enviarMensagem() {
        const mensagem = inputMensagem.value

        if(mensagem == "") {
            alert('Digite alguma coisa...')
        } else {
            renderizarMensagem('enviado', 'voce', mensagem)
            inputMensagem.value = ""
            setTimeout( () => {
            renderizarMensagem('recebido', 'outros', respostaDoBot())
            },2000)
        }
    }

    function renderizarMensagem(tipoDeEnvio, tipoDeEstilo, mensagem) {
        const novaDiv = document.createElement('div')

        tipoDeEnvio == 'enviado' ? 'enviado' : 'recebido';
        
        tipoDeEstilo == "voce" ? 'voce' : 'outros'

        novaDiv.classList.add(`${tipoDeEnvio}`)

        novaDiv.innerHTML = `

            <div class="caixaDeMensagem ${tipoDeEstilo}">
                ${mensagem}
                <div class="infos">
                    <img src="assets/src/icons/heart.svg"> 
                    18:12 
                    <img src="assets/src/icons/viewed.svg">
                </div>
            </div>

        `

        caixaDeMensagem.appendChild(novaDiv);
    }

    console.log("Carregado")

    setTimeout(() => {
        carregandoContatos()
    }, 3500)
})

/**
 *  
    <div class="boxContacts">
        
    </div>
 * 
 * 
 */