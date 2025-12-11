

//alias name for values
type paymentMethod  = "UPI" | "CreditCard" | "PayPal"

function invokePayment(paymentGateway:paymentMethod) {
    
if(paymentGateway==="PayPal"){
    console.log("Launch Paypal gateway");    
}else {
    console.log("CreditCard");
    
}

}
invokePayment("PayPal")