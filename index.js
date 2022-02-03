// Write your solution in this file!
var customerName = 'bob'; // without using a variable it becomes a global variable in a function. if we use a variabel (const, let, var ) we then have a functional scope
// console.log('num3:', customerName); // We're doing this to see what customername is returning
//num3 : bob
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); 
    // reference the previously defined variable (7)
    // defining customername to become uppercase (7)
    // console.log('num6:' , customerName);
    // num6 : BOB
}

// console.log('num9: ', customerName);
// after node index.js we get => num9 : BOB // looking at the variable we execute in the real time. by doing node index.js 



//with var their both the same thing. because we use var, and the variable being referenced on line 5 is the same as line 2 due to var. its operating on the original. invoking the function changed the uppercase before we can invoke(or execute)


function setBestCustomer() {
     bestCustomer = 'not bob' // we define this variable inside the functional scope 
}

// we had to remove var to get the test to pass 
function overwriteBestCustomer(customer){
    console.log('customer', customer); // => not bob 
    console.log('bestCustomer', bestCustomer); //=> not bob 
     bestCustomer = customer
    console.log('result', bestCustomer); // => maybe bob 
     
}


// unsuccessfully reassign the least favorite customer to
function changeLeastFavoriteCustomer(){
    
}