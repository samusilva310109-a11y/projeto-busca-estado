const estadosCidades = require('./estados_cidades')

const listaDeEstados = estadosCidades.listaDeEstados;


const getListaEstados = () => {
    let lista = {
        uf: [],
        quantidade: listaDeEstados.estados.length
    }

    listaDeEstados.estados.forEach(uf => {
        lista.uf.push(uf.sigla)
    })

    return lista
}

const getDadosEstados = (siglaUf) => {
    let dados = {}

    listaDeEstados.estados.forEach(item => {
        if (String(siglaUf).toUpperCase() == String(item.sigla).toUpperCase()) {
            dados = {
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                regiao: item.regiao
            }
        }
    })

    return dados

}

const getCapitalEstado = (siglaUf) => {
    let dados = {}

    listaDeEstados.estados.forEach(item => {
        if (String(siglaUf).toUpperCase() == String(item.sigla).toUpperCase()) {
            dados = {
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital
            }
        }
    })

    return dados

}

const getEstadosRegiao = (regiao) => {
    let estadosRegioes = {
        regiao: String(regiao).toUpperCase(),
        estados: []
    }

    listaDeEstados.estados.forEach(estado => {
        if (String(regiao).toUpperCase() == String(estado.regiao).toUpperCase()) {
            estadosRegioes.estados.push({uf: estado.nome, descricao: estado.nome})
        }
    })

    return estadosRegioes
}


// console.log(listaDeEstados)
console.log(getEstadosRegiao("sul"));







