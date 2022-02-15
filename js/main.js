const bodyElement = document.querySelector('body')
const headerElement = document.getElementById('timer')
const mainElement = document.querySelector('main')

const rgbGenerator = () => {
  const red = document.getElementById('red').value
  const green = document.getElementById('green').value
  const blue = document.getElementById('blue').value
  const square = document.getElementById('square')

  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  result.innerHTML = `rgb(${red}, ${green}, ${blue})`
}

const dateNow = () => {
  const date = new Date()
  const hour = date.getHours()
  const result = document.getElementById('dateNow')
  result.innerHTML =
    '<i class="fas fa-eye-dropper"></i> ' +
    `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
  if (hour >= 6 && hour < 18) {
    bodyElement.style.color = 'var(--dark-gray)'
    bodyElement.style.backgroundColor = 'var(--light-gray)'
    headerElement.style.backgroundColor = 'var(--desatured-gray)'
    mainElement.style.backgroundColor = 'var(--desatured-gray)'
  } else {
    bodyElement.style.color = 'white'
    bodyElement.style.backgroundColor = 'var(--dark-gray)'
    headerElement.style.backgroundColor = 'var(--gray)'
    mainElement.style.backgroundColor = 'var(--gray)'
  }
  setTimeout(dateNow, 1000)
}
dateNow()
