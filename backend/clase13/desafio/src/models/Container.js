const fs = require('fs')

class Container {
    constructor (name){
        this.fileName = name
        this.products = []
    }
    
    save = async (object) => {
        this.products =  fs.existsSync(this.fileName) ? (await this.getAll()) : []
        const amount = this.products.length
        this.products.push({...object, id: amount + 1})
        await fs.promises.writeFile(
            this.fileName, 
            JSON.stringify(this.products, null, 2),
        )
        return amount + 1
    }

    update = async (object) => {
        if (object.id) {
            const oldProduct = await this.getById(object.id)
            if (oldProduct) {
                this.products =  fs.existsSync(this.fileName) ? (await this.getAll()) : []
                await this.deleteById(+oldProduct.id)
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

    getAll = async () => {
        try {
            const objs = await fs.promises.readFile(this.fileName, "utf-8")
            return objs ? JSON.parse(objs) : this.products
        } catch (e) {
            console.log(e)
        }
    }

    getById = async id => {
        const objs = await this.getAll()
        return objs.find(obj => obj?.id === id)
    }

    deleteById = async id => {
        const objs = await this.getAll()
        const newObject = objs.filter(o => o?.id !== id)
        this.products = newObject
        await fs.promises.writeFile(
            this.fileName, 
            JSON.stringify(newObject, null, 2)
        )
    }

    deleteAll = async () => {
        await fs.promises.writeFile(this.fileName, "", "utf-8")
    }

}

module.exports = { Container }