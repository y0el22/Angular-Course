let habilidades: (boolean | string | number)[] = ['Yoel', 'Dario', 'Trujillo', 'Sierra', 29, true]
let habilidadesstr: (string)[] = ['Yoel', 'Dario', 'Trujillo', 'Sierra']

interface Personaje{
    nombre:string;
    edad:number;
    isAlive:boolean;
    habilidades?: string[];
}

const Yoel:Personaje  = {
    nombre:'Yoel',
    edad: 29,
    isAlive: true,
    habilidades: ['C#', 'C', 'C++', 'JS']
}

console.table(Yoel);