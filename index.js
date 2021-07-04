'use strict'

function getZero(num) {
   if (num < 10 && num >= 0) {
      return `0${num}`
   } else {
      return num
   }
}

const deadline = '2022-12-12'

function calculateTime() {
   const t = Date.parse(deadline) - Date.parse(new Date())
   const days = Math.floor(t / (1000 * 60 * 60 * 24))
   const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
   const minutes = Math.floor((t / (1000 * 60)) % 60)
   const seconds = Math.floor((t / 1000) % 60)

   return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
   }
}

function getTime() {
   const days = document.querySelector('.days')
   const hours = document.querySelector('.hours')
   const minutes = document.querySelector('.minutes')
   const seconds = document.querySelector('.seconds')
   const timeInterval = setInterval(innerTime, 1000)

   innerTime()

   function innerTime() {
      const t = calculateTime()

      days.innerHTML = getZero(t.days)
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)

      if (t.total <= 0) {
         clearInterval(timeInterval)
      }

   }
}

getTime()