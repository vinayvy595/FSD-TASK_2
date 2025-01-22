function delayedMessage(message, delay, callback) {
    setTimeout(() => {
        console.log(message); 
        if (callback) {
            callback(); 
        }
    }, delay);
}

function onMessagePrinted() {
    console.log('The message has been printed successfully!');
}

delayedMessage('Hello, this is a delayed message!', 2000, onMessagePrinted);
