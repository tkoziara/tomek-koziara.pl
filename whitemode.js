var white = getCookie("white_mode")

if (white != "" && Number(white) == 1) {
  var element = document.body
  element.classList.toggle("black-mode")
}

function WhiteMode() {
  var element = document.body
  element.classList.toggle("black-mode")
  if (element.classList.contains("black-mode")) {
    setCookie("white_mode", 1, 365)
  } else {
    setCookie("white_mode", 0, 365)
  }
}
