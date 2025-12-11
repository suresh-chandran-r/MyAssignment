function invokePayment(paymentGateway) {
    if (paymentGateway === "PayPal") {
        console.log("Launch Paypal gateway");
    }
    else {
        console.log("CreditCard");
    }
}
invokePayment("PayPal");
