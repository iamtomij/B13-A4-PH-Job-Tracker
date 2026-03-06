function getTextValue(index) {
   const elements = document.querySelectorAll("#total-count")
   return parseInt(elements[index].innerText)
}



function setTextValue(index, value) {
   const elements = document.querySelectorAll("#total-count")
   elements[index].innerText = value
}




function getCards() {
   return document.querySelectorAll(".job-card")
}