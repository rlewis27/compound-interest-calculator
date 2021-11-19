const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#interest")
const timesBox = document.querySelector("#times")
const yearsBox = document.querySelector("#years")
const endAmount = document.querySelector("#final")

function computeCompoundInterest() {
  const principal = principalBox.value
  const interestRate = interestBox.value
  const timesCompounded = timesBox.value
  const years = yearsBox.value
  const finalVal = principal * ((1 + interestRate / timesCompounded) ** (timesCompounded * years))
  endAmount.textContent = finalVal
}

principalBox.addEventListener('input', computeCompoundInterest)
interestBox.addEventListener('input', computeCompoundInterest)
timesBox.addEventListener('input', computeCompoundInterest)
yearsBox.addEventListener('input', computeCompoundInterest)
