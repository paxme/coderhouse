const fs = require('fs')

try {
    fs.readFile("./package.json", "utf-8", (err, data) => {
        if (err) throw "cant read package json"
        const dataJson = JSON.parse(data)
        let res = {
            propsStrings: [],
            propsObjects: [],
        }
        for (prop in dataJson) {
            Object(dataJson[prop]) === dataJson[prop]
                ? res.propsObjects.push({[prop]: dataJson[prop]}) 
                : res.propsStrings.push({[prop]: dataJson[prop]})
        }
        fs.stat("./package.json", (err, stats) => {
            if (err) throw "cant get stats"
            res = {...res, size: stats.size}
            fs.writeFile("stats.txt", JSON.stringify(res,null, 2), "utf-8", (err) => {
                if (err) throw "cant write"
                console.log("done")
            })
        })
    })
} catch (e) {
    throw "error in process"
}
