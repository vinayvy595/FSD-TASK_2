function fetchDataWithCallback(success = true, callback) {
    setTimeout(() => {
        if (success) {
            const data = { id: 1, name: 'Sample Data' };
            callback(null, data); 
        } else {
            const errorMessage = 'Failed to fetch data';
            callback(errorMessage, null); 
        }
    }, 2000); 
}

function handleResponse(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data received:', data);
    }
}

console.log('Testing success scenario...');
fetchDataWithCallback(true, handleResponse);

setTimeout(() => {
    console.log('Testing failure scenario...');
    fetchDataWithCallback(false, handleResponse);
}, 3000); 
