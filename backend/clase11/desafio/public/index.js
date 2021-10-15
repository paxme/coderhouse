const socket = io.connect()

socket.on('new_update', (data) => {3
    render(data)
})

function sendProduct (e) {
    e.preventDefault()
    const product = {
        title: document.querySelector("#title").value,
        price: document.querySelector("#price").value,
        thumbnail: document.querySelector("#thumbnail").value
    }
    socket.emit("new_product", product)

    return false
}

function render(data) {
    const el = document.createElement('div')
    el.classList.add("w-full", "lg:w-1/2", "p-5")
    let newComponent = `<div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
      <img class="block h-auto w-full lg:w-24 flex-none bg-cover h-24 rounded-full" src=${data.thumbnail}>
      <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-1 leading-tight">${data.title}</div>
        <p class="text-grey-darker text-base">${data.price}</p>
      </div>
    </div>`
  el.innerHTML = newComponent.trim()

  const pGrid = document.querySelector("#productGrid")

  pGrid.appendChild(el)
}