var Customer_old = /** @class */ (function () {
    function Customer_old(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Customer_old.prototype.getfirstName = function () {
        return this._firstName;
    };
    Customer_old.prototype.setfirstName = function (value) {
        this._firstName = value;
    };
    Customer_old.prototype.getlastName = function () {
        return this._lastName;
    };
    Customer_old.prototype.setlastName = function (value) {
        this._lastName = value;
    };
    return Customer_old;
}());
// let's create an instance
var myCustomer_old = new Customer_old("Martin", "Dixon");
console.log(myCustomer_old.getfirstName());
console.log(myCustomer_old.getlastName());
myCustomer_old.setfirstName("Susan");
myCustomer_old.setlastName("Public");
console.log(myCustomer_old.getfirstName());
console.log(myCustomer_old.getlastName());
