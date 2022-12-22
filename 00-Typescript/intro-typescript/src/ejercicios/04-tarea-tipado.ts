interface SuperHeroe{
    nombre: string;
    edad:number;
    direccion:Direccion; //direccion de tipo interfaz Direccion
    mostrarDireccion:() => string
}

interface Direccion {
    calle:string,
    pais:string,
    cuidad:string
}


const superHeroe: SuperHeroe = {
    nombre:'Spiderman',
    edad:30,
    direccion:{
        calle:'avv equis',
        pais: 'USA',
        cuidad:'NYC'
    },
    mostrarDireccion(){
        return `${this.nombre} , ${this.direccion.cuidad} , ${this.direccion.pais} `
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);