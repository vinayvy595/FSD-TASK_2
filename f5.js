function authenticateUser(userId, callback) {
    setTimeout(() => callback(null, 'User authenticated'), 1000);
}

function verifyPaymentMethod(paymentMethod, callback) {
    setTimeout(() => callback(null, 'Payment method valid'), 1000);
}

function processPayment(amount, callback) {
    setTimeout(() => callback(null, 'Payment processed'), 1000);
}

function updateAccountBalance(userId, amount, callback) {
    setTimeout(() => callback(null, 'Account balance updated'), 1000);
}

function notifyUser(email, message, callback) {
    setTimeout(() => callback(null, `Email sent to ${email}: ${message}`), 1000);
}

function processPaymentFlow(userId, paymentMethod, amount, email) {
    authenticateUser(userId, (err) => {
        if (err) return console.error(err);
        verifyPaymentMethod(paymentMethod, (err) => {
            if (err) return console.error(err);
            processPayment(amount, (err) => {
                if (err) return console.error(err);
                updateAccountBalance(userId, amount, (err) => {
                    if (err) return console.error(err);
                    notifyUser(email, 'Payment successful!', (err) => {
                        if (err) return console.error(err);
                        console.log('Payment flow completed successfully.');
                    });
                });
            });
        });
    });
}

processPaymentFlow('user123', 'credit_card', 100, 'user@example.com');
