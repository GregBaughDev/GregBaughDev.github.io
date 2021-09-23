const first = document.querySelector("#first")
const second = document.querySelector("#second")

document.addEventListener("submit", (e) => {
    e.preventDefault()
    fizzBuzz(parseInt(first.value), parseInt(second.value))
})

const fizzBuzz = (x, y) => {
    // Error handling
    if(x > y){
        return document.querySelector("#fb-num-1").textContent = "First number must be less than the second"
    } else if (x < 0 || x > 100){
        return document.querySelector("#fb-num-1").textContent = "Number must be between 1 and 100"
    } else if (y < 0 || y > 100){
        return document.querySelector("#fb-num-2").textContent = "Number must be between 1 and 100"
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
        document.querySelector("#fb-result").append(item)
    }
    first.value = ''
    second.value = ''
} 