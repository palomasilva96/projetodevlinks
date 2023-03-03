function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("black")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("black")) {
    img.setAttribute("src", "./Avatar/Avatar.png")
  } else {
    img.setAttribute("src", "./Avatar/Avatar1.png")
  }
}
