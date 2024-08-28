function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a tag img
  const img = querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
  }else{
    img.setAttribute("src", "./assets/avatar.png")
  }

  /*
if(html.classList.contains('light')){
  html.classList.remove('light')
}else{
  html.classList.add('light')
}
*/
}