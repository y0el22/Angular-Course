
import { calculaISV, Producto } from "./05-desestructuracion";

const carritoProductos : Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 1020
    },
    {
        desc: 'Telefono 3',
        precio: 10220
    }
]

const [total, isv] = calculaISV(carritoProductos);
console.log('Total:', total, 'ISV:', isv )
