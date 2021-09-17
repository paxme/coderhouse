const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

interface producto {
    id: number,
    nombre: string,
    precio: number
}

const pNames = (productos: producto[]) => {
    return productos.map(producto => producto.nombre)
}

const pTotalPrice = (productos: producto[]) => {
    return +productos.reduce((prev, curr) => prev + curr.precio, 0).toFixed(2)
}

const pMeanPrice = (productos: producto[]) => {
    return +(pTotalPrice(productos) / productos.length).toFixed(2)
}

const pMinPrice = (productos: producto[]): number => {
    return Math.min(...productos.map(producto => producto.precio))
}

const pMaxPrice = (productos: producto[]): number => {
    return Math.max(...productos.map(producto => producto.precio))
}

const summary = (productos: producto[]) => {
    return {
        "names": pNames(productos).join(", "),
        "total": pTotalPrice(productos),
        "mean": pMeanPrice(productos),
        "max": pMaxPrice(productos),
        "min": pMinPrice(productos)
    }
}

console.log(summary(productos))