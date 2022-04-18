// document.addEventListener('keypress', function (event) {
//   if (event.key === 'Enter') {
//     const button = sendMessage()
//     button.click()
//   }
// })


let userName
let user
let verifyStatus

function logIn() {
  userName = prompt('Qual seu lindo Nome?')
  user = {
    name: userName
  }

  const axiosContent = axios.post(
    'https://mock-api.driven.com.br/api/v6/uol/participants',
    user
  )

  axiosContent.then(chargeMessages)
  axiosContent.catch(verifyName)
}
logIn()

function verifyName() {
  alert('Usuário já existente, por favor escolha outro nome.')

  logIn()
}

function chargeMessages() {}

function myStatus() {
  verifyStatus = axios.post(
    'https://mock-api.driven.com.br/api/v6/uol/status',
    user
  )
}
const myInterval = setInterval(myStatus, 5000)
clearInterval(myInterval)

function sendMessage() {
  const input = document.querySelector('.receive-text')

  const value = input.value

  const text = document.querySelector('.content')
  text.innerHTML = `<div class="msgs same-config-msgs">
  <p>
    <span>(09:22:28)</span><strong> Igor</strong> para
    <strong>Todos:</strong> ${value}
  </p>
</div>`

  console.log(value)
}
