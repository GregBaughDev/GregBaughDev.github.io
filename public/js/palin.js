let userInput = document.querySelector("#word")
let result = document.querySelector("#palin-result")

document.addEventListener("submit", (e) => {
    e.preventDefault()
    palindrome(userInput.value)
})

const palindrome = (str) => {
    let splitStr = str.split('').filter(char => char.match(/[A-Z\d]/gi))
    
    if(splitStr.length % 2 !== 0){
        let toRemoveIndex = Math.floor(splitStr.length / 2)
        splitStr.splice(toRemoveIndex, 1)
    }

    let string = splitStr.join('').toLowerCase()
    let revString = splitStr.reverse().join('').toLowerCase()

    if(string == revString){
        result.textContent = `${userInput.value} is a palindrome!`
    } else {
        result.textContent = `${userInput.value} is not a palindrome!`
    }
}