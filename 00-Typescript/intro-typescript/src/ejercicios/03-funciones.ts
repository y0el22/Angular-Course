const sumar = (a:number, b:number):number => a + b;
console.log(sumar(5,1)); 

// Orden de Parametros : 1.Obligatorios, 2.Opcional, 3.Por defecto
const multiplicar = (numero:number, otroNumero?:number, base:number = 2):number => numero * base;
console.log(multiplicar(5)); 


interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void
}

const curar = (personaje:PersonajeLOR, curarX:number): void => {
    personaje.pv +=  curarX
    console.log(personaje);
} 

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Yoelcito',
    pv: 50,
    mostrarHp(){
        console.log(this.pv);
    }
}

curar(nuevoPersonaje, 50)
nuevoPersonaje.mostrarHp()