// Write your solution in this file!
var customerName = 'bob';
console.log('num3:', customerName); // We're doing this to see what customername is returning
//num3 : bob
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); // defining customername to become uppercase
    console.log('num6:' , customerName);
    // num6 : BOB
}
 upperCaseCustomerName();
console.log('num9: ', customerName);
// after node index.js we get => num9 : BOB