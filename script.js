const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5) * 2
const holdTime = totalTime / 5


function breatheAnimation () {
  text.innerHTML = 'Breath in'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold'

    setTimeout(() => {
      text.innerText = 'Breath Out!'
      container.className = 'container shrink'
    }, holdTime)
  },breatheTime)
}

setInterval(breatheAnimation, totalTime )