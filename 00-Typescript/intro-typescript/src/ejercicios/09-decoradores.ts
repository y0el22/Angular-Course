//Decoradores de clases

/* Un decorador no es más que una función que expande su clase añadiendole
funcionalidades especiales*/

function classDecorator<T extends {new (...args:any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override'
    };
}

//Aqui se usa la función creada anteriormente classDecorator como decorador de mi clase
@classDecorator
class MiSuperClase{

    public miPropiedad:string = 'ABC22';

    imprimir(){
        console.log('Hola mundo')
    }
}

console.log(MiSuperClase)

const miclase = new MiSuperClase()
console.log(miclase.imprimir)

