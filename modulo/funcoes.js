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


console.log(getListaEstados());



