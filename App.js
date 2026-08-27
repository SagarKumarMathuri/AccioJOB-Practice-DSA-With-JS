const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
}
const kraven = {
    salary: 2000;
}
kraven.__proto__ = employee;