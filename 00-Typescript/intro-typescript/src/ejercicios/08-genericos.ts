//Genericos

//Recibe un argumento de tipo generico, ósea, del tipo que se le pase 
const queTipoSoy = <T>(arg: T) => {
    return arg;
}

//También puede recibir un tipo generico pero que el retorno sea otro, ejemplo un string
const queTipoSoy2 = <T>(arg: T):string => {
    return arg.toString();
}

let soyString = queTipoSoy('hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5])

//Le especificamos el tipo de manera explicita
let soyExplicito = queTipoSoy<Number>(3)

console.log(soyString)