const fs = require('fs')

try {
    const date = new Date()
    const [month, day, year]  = [date.getMonth(), date.getDate(), date.getFullYear()]
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    fs.writeFileSync("fyh.txt", `${hour}:${minutes}:${seconds} ${day}/${month+1}/${year}`, "utf-8")
    console.log(fs.readFileSync("fyh.txt", "utf-8"))
} catch (e) {
    throw new Error("EHHH Algo salio mal")
}