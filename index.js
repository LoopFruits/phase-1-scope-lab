// Write your solution in this file!
var customerName = 'bob';
// console.log('num3:', customerName); // We're doing this to see what customername is returning
//num3 : bob
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); // defining customername to become uppercase
    // console.log('num6:' , customerName);
    // num6 : BOB
}
 upperCaseCustomerName();
// console.log('num9: ', customerName);
// after node index.js we get => num9 : BOB // looking at the variable we execute in the real time. by doing node index.js 


//with var their both the same thing. because we use var, and the variable being referenced on line 5 is the same as line 2 due to var. its operating on the original. invoking the function changed the uppercase before we can invoke(or execute)

