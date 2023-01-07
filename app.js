// // console.log("Hello World")

// // this is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // just a console log for ourselves.
// console.log(sum(7,3))

// // export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(usd) {
    return jpy = parseFloat((oneEuroIs.JPY * usd / oneEuroIs.USD).toFixed(1))
}
console.log(fromDollarToYen(1.2))


function fromEuroToDollar(usd) {
    return eur = oneEuroIs.USD * usd    
}

function fromYenToPound(yen) {
    return pnd = oneEuroIs.GBP * yen / oneEuroIs.JPY
}


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound};
