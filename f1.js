function greet(name, callback) {
    const message = `Hello, ${name}! Welcome!`;
    return callback(message);
}

function displayMessage(message) {
    console.log(message);
}

greet('Alice', displayMessage);
