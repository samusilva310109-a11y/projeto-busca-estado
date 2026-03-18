const estadosCidades = require('./estados_cidades')

const listaDeEstados = estadosCidades.listaDeEstados;


const getListaEstados = () => {
    let lista = {
        uf: [], 
    }

    listaDeEstados.estados.forEach(uf => {
        lista.uf.push(uf.sigla)
    })
    return lista
}


console.log(getListaEstados());



