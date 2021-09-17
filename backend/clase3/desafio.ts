import * as fs from 'fs'

interface Product {
    id?: number
    title: string,
    price: number,
    thumbnail: string,
}

class Contenedor {
    fileName: string
    products: Product[]

    constructor (name: string){
        this.fileName = name
        this.products = []
    }
    
    save = async (object: Product) => {
        this.products =  fs.existsSync(this.fileName) ? (await this.getAll()) : []
        const amount = this.products.length
        this.products.push({...object, id: amount + 1})
        await fs.promises.writeFile(
            this.fileName, 
            JSON.stringify(this.products, null, 2),
        )
        return amount + 1
    }

    getAll = async (): Promise<Product[]> => { 
        const objs = await fs.promises.readFile(this.fileName, "utf-8")
        return objs ? JSON.parse(objs) : this.products
    }

    getById = async (id: number): Promise<Product | undefined> => {
        const objs = await this.getAll()
        return objs.find(obj => obj?.id === id)
    }

    deleteById = async (id: number): Promise<void> => {
        const objs = await this.getAll()
        const newObject = objs.filter(o => o?.id !== id)
        await fs.promises.writeFile(
            this.fileName, 
            JSON.stringify(newObject, null, 2)
        )
    }

    deleteAll = async () => {
        await fs.promises.writeFile(this.fileName, "", "utf-8")
    }

}

const run = async () => {
    const c = new Contenedor("productos.txt")
    await c.deleteAll()
    await c.save({                                                                                                                                                    
        title: 'Escuadra',                                                                                                                                 
        price: 123.45,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                            
      })
    await c.save({                                                                                                                                                    
        title: 'Calculadora',                                                                                                                              
        price: 234.56,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
    })
    await c.save({                                                                                                                                                    
        title: 'Globo Terráqueo',                                                                                                                          
        price: 345.67,                                                                                                                                     
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
        id: 3                                                                                                                                              
      })
    console.log(await c.getById(1))
    await c.deleteById(2)
    console.log(await c.getAll())
}

run()