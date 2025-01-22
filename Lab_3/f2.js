function multiplyByTwo(num, callback) {
    const result = num * 2;
    return callback(result);
}

function subtractThree(num, callback) {
    const result = num - 3;
    return callback(result);
}

function addTen(num, callback) {
    const result = num + 10;
    return callback(result);
}

function processNumber(initialValue) {
    multiplyByTwo(initialValue, (result1) => {
        subtractThree(result1, (result2) => {
            addTen(result2, (finalResult) => {
                console.log(`Final Result: ${finalResult}`);
            });
        });
    });
}

processNumber(5); 
