function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  /*ele verifica se tem o light, se tiver ele tira, se não tiver ele coloca*/

  const img = document.querySelector("#profile img")
  /*pesquisa pelo seletor, esse é o seletor do CSS*/

  if(html.classList.contains("light")){
    img.setAttribute("src","./assets/Avatar2.png")
    /*setAttribute: para modificar, ajustar, adicionar um atributo*/
    /*se tiver o light, ele altera a imagem*/
  }
  else{
    img.setAttribute("src", "./assets/Avatar.png")
    /*se não tiver o light, mantem a imagem*/
  } 
}
