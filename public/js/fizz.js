const first = document.querySelector("#first")
const second = document.querySelector("#second")
const result = document.querySelector("#fb-result")

document.addEventListener("submit", (e) => {
    e.preventDefault()
    while(result.firstChild){
        result.removeChild(result.firstChild)
    }
    fizzBuzz(parseInt(first.value), parseInt(second.value))
})

const fizzBuzz = (x, y) => {
    document.querySelector(".errors").textContent = ""
    // Error handling
    if(x > y){
        return document.querySelector(".errors").textContent = "First number must be less than the second"
    } else if (x < 0 || x > 100){
        return document.querySelector(".errors").textContent = "Number must be between 1 and 100"
    } else if (y < 0 || y > 100){
        return document.querySelector(".errors").textContent = "Number must be between 1 and 100"
    }
    
    // Loop for maths
    for(let i = x; i <= y; i++){
        let item = document.createElement("h5")
        if(i % 3 === 0 && i % 5 === 0){
            item.textContent = 'FizzBuzz'
        } else if (i % 3 === 0){
            item.textContent = 'Fizz'
        } else if (i % 5 === 0){
            item.textContent = 'Buzz'
        } else {
            item.textContent = i
        }
        result.append(item)
    }
    first.value = ''
    second.value = ''
} 