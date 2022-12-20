//Encadenamiento opcional

interface Pasajero{
    nombre: string,
    hijos?: string[],
}

const pasajero1: Pasajero = {
    nombre: 'Yoel'
}

const pasajero2: Pasajero = {
    nombre: 'Pedro',
    hijos: ['Juan', 'Carlos']
}

const imprimeHijos = (pasajero:Pasajero):void => {

    // el ? en la linea siguiente significa que trate de obtener el length si es que no es undefined
    // y si es undefined devuelvo 0 solo el simbolo ? nos ahorra una excepción que tendríamos 
    //por querer hacer undefined.length
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos)

}

imprimeHijos(pasajero1)