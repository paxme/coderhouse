var socket = io();

socket.on('connected', (data) => {
    console.log(data)
    let div = document.querySelector('#data')
    let p = document.createElement("p")
    p.innerHTML = data.data
    div.appendChild(p)
})

const addMessage = (e) => {
    e.preventDefault()
    socket.emit("client-message", e.target.querySelector("#message").value)
    return
}