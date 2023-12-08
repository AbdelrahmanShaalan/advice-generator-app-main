const dice = document.querySelector(".dice");
const adviceId = document.querySelector(".advice-id")
const adviceBox = document.querySelector(".advice-box");
dice.addEventListener("click" , getAdvice)

async function getAdvice() {
    let adviceData = await fetch("https://api.adviceslip.com/advice")
    let result = await adviceData.json()
    adviceId.innerHTML = result.slip.id
    adviceBox.innerHTML = `"${result.slip.advice}"`
}