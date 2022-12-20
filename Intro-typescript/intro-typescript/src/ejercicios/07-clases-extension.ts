//Clases

//Manera Común
class Heroe {
    public nombre: string;
    public edad: number;
    public alter:string;

    constructor(alter:string){
        this.alter = alter
    }
}
const ironman = new Heroe('Iron');
console.log(ironman)


//Manera simplificada
class Heroe2 {
    
    constructor(
        public nombre: string, 
        public edad: number,
        public alter?: string
        ){}
}

const spiderman = new Heroe2('Peter', 28);
console.log(spiderman)

//***************** Extensión de clases ************************** */

class PersonaNormal{
    
    constructor(
        public nombre: string, 
        public direccion: string
        ){}

}
const Yoel = new PersonaNormal('Yoel', 'Santiago centro')
console.log(Yoel)

//El super() es basicamente llamar al constructor de la clase a la que extiende

class HeroeExtendido extends PersonaNormal {
    
    constructor(
        public alterEgo: string, 
        public edad: number,
        public NombreReal: string
        ){
            super(NombreReal, 'Nueva York' );
        }
}

const heroeExtendido = new HeroeExtendido('IronMan', 33, 'Tony' )
console.log(heroeExtendido)



