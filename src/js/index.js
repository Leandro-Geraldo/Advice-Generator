const btnAdvice = document.querySelector(".advice-update")
const adviceDescription = document.querySelector(".advice-description")
const adviceNumber = document.querySelector(".advice-id")

btnAdvice.addEventListener('click', ()=>{
    geradorDeConselho()
})

async function geradorDeConselho(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const responseAdvice = await response.json()
    const adviceId = `Adivice ${responseAdvice.slip.id}`
    const adviceText = `${responseAdvice.slip.advice}`
    
    adviceNumber.innerHTML = adviceId
    adviceDescription.innerHTML = adviceText
}
