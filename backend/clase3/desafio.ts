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

    update = async (object: Product) => {
        if (object?.id) {
            const oldProduct = await this.getById(object?.id)
            if (oldProduct) {
                this.products =  fs.existsSync(this.fileName) ? (await this.getAll()) : []
                await this.deleteById(+oldProduct?.id!)
                this.products.push({...object})
                await fs.promises.writeFile(
                    this.fileName, 
                    JSON.stringify(this.products, null, 2),
                )   
            } else {
                const {id, ...rest} =object
                await this.save({...rest})
            }
        }      
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