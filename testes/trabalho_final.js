

export function geradorDeTagsDeIdentificacao(nome) {
    const pet = nome.toUpperCase()
    return pet
}

export function verificarSePodeSerAdotado(idade, porte) {
    if (idade == 1 && porte == `M`) {
        return true
    }
    return false
}


export function calcularConsumoDeRacao(nome, quantidadeDias, peso) {
    const racao = peso * 300
    const totalGramas = racao * quantidadeDias

    return totalGramas
}


export function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte) {
        case `pequeno`:
            return `brincar dentro de casa`
            break
        case `medio`:
            return `Brincar fora de casa`
            break
        case `grande`:
            return `Brincar no parque`
            break

    }
}


export async function buscarDadoAsync() {
    return `Pipoca`

}

