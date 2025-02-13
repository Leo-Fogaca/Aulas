const btnGenerator = document.getElementById('btn-generator')
const adviceId = document.getElementById('advice-id')
const adviceDescription = document.getElementById('advice-desc')

async function getAdvices() {
    try {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const responseJson = await response.json()
        let newId = responseJson.slip.id
        let newAdvice = responseJson.slip.advice

        adviceId.innerText = `Advice ${newId}`
        adviceDescription.innerText = newAdvice
    }catch(error) {
        console.log(error)
    }
}

btnGenerator.addEventListener('click', () => {
    getAdvices()
})

getAdvices()





