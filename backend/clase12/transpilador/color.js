const randomColour = () => {
    const [r, g, b] = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ]
    return [r, g, b]
}