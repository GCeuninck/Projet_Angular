class Customer_old {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public getfirstName(): string {
        return this._firstName;
    }

    public setfirstName(value: string) {
        this._firstName = value;
    }

    public getlastName(): string {
        return this._lastName;
    }
    public setlastName(value: string) {
        this._lastName = value;
    }
    
}

// let's create an instance
let myCustomer_old = new Customer_old("Martin", "Dixon");

console.log(myCustomer_old.getfirstName());
console.log(myCustomer_old.getlastName());

myCustomer_old.setfirstName("Susan");
myCustomer_old.setlastName("Public");

console.log(myCustomer_old.getfirstName());
console.log(myCustomer_old.getlastName());