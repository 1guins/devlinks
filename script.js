function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Guilherme Nunes sorrindo, dentro do carro, de camiseta branca e óculos escuro"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Guilherme Nunes sorrindo de camisa social de linho branca, barba e fundo claro"
    )
  }
}
