function cadenaValida(valor){
    if(typeof valor !== "string"){
        return false;
    }

    if(valor.trim().length === 0){
        return false;
    }

    return true;
}

function validarPrioridad(prioridad){ 
    let valido;

    switch(prioridad){
        case 'Alta':
        case 'Media':
        case 'Baja':
            valido = true;
            break;
        default:
            valido = false;
    }

    return valido;
}

function generarId(incidencias){
    if(incidencias.length === 0){
        return 1;
    }

    const ids = incidencias.map((incidencia) => incidencia.id);
    return Math.max(...ids) + 1;
}

module.exports = {
    cadenaValida,
    validarPrioridad,
    generarId,
};              