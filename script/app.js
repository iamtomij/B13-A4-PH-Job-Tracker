let interviewCount = 0
let rejectedCount = 0

const cards = document.querySelectorAll(".job-card")

cards.forEach(function (card) {
   const interviewBtn = card.querySelector(".btn-info")
   const rejectedBtn = card.querySelector(".btn-error")
   const status = card.querySelector(".btn")
   const deleteBtn = card.querySelector(".fa-trash-can")
   interviewBtn.addEventListener("click", function () {
      if (status.innerText !== "INTERVIEW") {
         if (status.innerText === "REJECTED") {
            rejectedCount--
         }
         interviewCount++
         status.innerText = "INTERVIEW"

         updateDashboard()
      }
   })
   rejectedBtn.addEventListener("click", function () {
      if (status.innerText !== "REJECTED") {
         if (status.innerText === "INTERVIEW") {
            interviewCount--
         }
         rejectedCount++
         status.innerText = "REJECTED"

         updateDashboard()
      }
   })
   deleteBtn.addEventListener("click", function () {
      if (status.innerText === "INTERVIEW") {
         interviewCount--
      }
      if (status.innerText === "REJECTED") {
         rejectedCount--
      }
      card.remove()
      updateDashboard()
   })
})
function updateDashboard() {
   const total = document.querySelectorAll(".job-card").length
   document.querySelectorAll("#total-count")[0].innerText = total
   document.querySelectorAll("#total-count")[1].innerText = interviewCount
   document.querySelectorAll("#total-count")[2].innerText = rejectedCount
}
const tabs = document.querySelectorAll(".tabs p")
tabs[0].addEventListener("click", function () {
   const cards = document.querySelectorAll(".job-card")
   if (cards.length === 0) {
      window.location.href = "nojob.html"
      return
   }
   cards.forEach(function (card) {
      card.style.display = "block"
   })
})


tabs[1].addEventListener("click", function () {
   let found = false
   document.querySelectorAll(".job-card").forEach(function (card) {
      const status = card.querySelector(".btn").innerText
      if (status === "INTERVIEW") {
         card.style.display = "block"
         found = true
      } else {
         card.style.display = "none"
      }
   })
   if (!found) {
      window.location.href = "nojob.html"
   }
})
tabs[2].addEventListener("click", function () {
   let found = false
   document.querySelectorAll(".job-card").forEach(function (card) {
      const status = card.querySelector(".btn").innerText
      if (status === "REJECTED") {
         card.style.display = "block"
         found = true
      } else {
         card.style.display = "none"
      }
   })
   if (!found) {
      window.location.href = "nojob.html"
   }
})