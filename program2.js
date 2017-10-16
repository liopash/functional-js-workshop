module.exports = repeat;

let operation = function() { console.log("test")}

function repeat(operation, num) {
    operation()
    if (num > 1) return repeat(operation, num - 1)
}

