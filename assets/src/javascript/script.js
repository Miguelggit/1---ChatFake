document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.querySelector('.button[src="assets/src/icons/send.svg"]')
    const inputMensagem = document.querySelector('#inputText')
    const caixaDeMensagem = document.querySelector('.conteinerDeMensagem')

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
    function enviarMensagem() {
        const mensagem = inputMensagem.value

        if(mensagem == "") {
            alert('Digite alguma coisa...')
        } else {
            renderizarMensagem('recebido', 'outros', mensagem)
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
})