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


    listaDeEstados.estados.forEach(item => {
        if (String(siglaUf).toUpperCase() == String(item.sigla).toUpperCase()) {
            console.log(item);
            
        }
    })

}

getDadosEstados("sp")






