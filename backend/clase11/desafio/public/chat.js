const socket = io.connect()
let userName = ""

socket.emit("request_messages")

socket.on("get_messages", (data) => {
    const messagesContainer = document.querySelector("#messages")
    for (const message of data) {
        const messageElement = createMessage(message)
        messagesContainer.appendChild(messageElement)
    }
})

const sendMessage = () => {
    if (!userName) {
        userName = document.querySelector("#name").value || socket.id
        document.querySelector("#name").classList.add("hidden")
    }
    const message = {
        name: userName || document.querySelector("#name").value,
        message: document.querySelector("#message").value,
        socketId: socket.id
    }
    document.querySelector("#message").value = ""
    socket.emit("new_message", message)
}

document.querySelector("#submitButton").addEventListener("click", () => {
    sendMessage()
})

socket.on('update_chat', (data) => {
    render(data)
})

const render = (data) => {
    const messagesContainer = document.querySelector("#messages")
    const messageElement = createMessage(data)
    messagesContainer.appendChild(messageElement)
}

const createMessage = (data) => {
    const messageElement = document.createElement("div")
    if (data.socketId === socket.id) {
        messageElement.classList.add("flex", "w-full", "mt-2", "space-x-3", "max-w-xs", "ml-auto", "justify-end")
        const newMessage = `<div>
          <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
            <p class="text-sm">${data.message}</p>
          </div>
          <span class="text-xs text-gray-500 leading-none">${data.name}</span>
        </div>`
        messageElement.innerHTML = newMessage.trim()
        return messageElement
    } else {
        messageElement.classList.add("flex", "w-full", "mt-2", "space-x-3", "max-w-xs")
        const newMessage = `<div>
          <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
            <p class="text-sm">${data.message}</p>
          </div>
          <span class="text-xs text-gray-500 leading-none">${data.name}</span>
        </div>`
        messageElement.innerHTML = newMessage.trim()
        return messageElement
    }
}