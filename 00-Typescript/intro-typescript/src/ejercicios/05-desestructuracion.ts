
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 10,
    segundo: 54,
    cancion: 'Mi canción nueva',
    detalles: {
        autor: 'Carlos X',
        anio: 2022,
    }

}

//**********Desestructuración de Objetos:************

//Desestructurar. Importante posterior a los : se puede definir el nombre con el cual se usará lo desestructurado
const {volumen:vol, segundo, cancion, detalles:{autor: autorDetalle, anio}} = reproductor

//Desestructurar lo desestructurado anteriormente ejemplo el objeto detalles
//const {autor, anio} = detalles

// console.log('El volumen actual es: '+ vol)
// console.log('La canción actual es: ' + cancion )
// console.log('El autor es: '+ autorDetalle)
// console.log('El anio es: '+ anio)

//**********Desestructuración de arreglos:************

const dbz: string[] = ['Goku', 'Veguetta', 'Trunks'];
const [, , t] = dbz;

console.log('personaje 3:', t )

//**********Desestructuración de argumentos:************
export interface Producto{
    desc: string;
    precio: number;
}

const telefono : Producto = {
    desc: 'Nokia A1',
    precio: 200,
}

const tablet : Producto = {
    desc: 'Ipad',
    precio: 300,
}

export const calculaISV = (productos: Producto[]):number[] =>{
    let total = 0;
    productos.forEach(({precio}) => {
        total+= precio
    })

    return [total, total * 0.15];
}

const articulos:Producto[] = [telefono, tablet]

const [total, isv] = calculaISV(articulos)
console.log('Total:', total, 'ISV:', isv)