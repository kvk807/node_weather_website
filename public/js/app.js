const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const clearButton = document.querySelector('#clearButton')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()  // prevents webpage from auto refreshing after submit

  const location = search.value

  messageOne.textContent = "Loading..."
  messageTwo.textContent = ''

  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})

clearButton.addEventListener('click', (e) => {
  e.preventDefault()

  messageOne.textContent = ''
  messageTwo.textContent = ''
  search.value = ''
  search.focus()
})
