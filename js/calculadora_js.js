let acaoEscolhida = ''
let valorTela = ''
let valorAntigoTela = ''

function botaoDigitoClick(event) {
    let digito = event.target.value
    atualizaTela(`${valorTela}${digito}`)
}

function botaoAcaoClick(event) {
    let acao = event.target.value
    rodarAcao(acao)
}

function atualizaTela(valor) {
    let tela = document.getElementById('tela')
    valorTela = valor
    tela.innerHTML = valorTela
}

function rodarAcao(acao) {

    if (acao === '=') {

        let resultado
        if (acaoEscolhida === '+') {
            resultado = parseInt(valorAntigoTela) + parseInt(valorTela)
        } if (acaoEscolhida === '-') {
            resultado = parseInt(valorAntigoTela) - parseInt(valorTela)
        } if (acaoEscolhida === '*') {
            resultado = parseInt(valorAntigoTela) * parseInt(valorTela)
        } if (acaoEscolhida === '/') {
            resultado = parseInt(valorAntigoTela) / parseInt(valorTela)
        }
        atualizaTela(resultado)

    } else {
        if (acao === 'C') {
            location.reload()
        }
        valorAntigoTela = valorTela
        atualizaTela('')
        acaoEscolhida = acao
    }
}
