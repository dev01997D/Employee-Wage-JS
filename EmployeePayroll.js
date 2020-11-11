{
    class EmployeePayrollData {
        //property
        id;
        salary;
        startDate;
        //constructors : JS class can have only one constructor, so use spread operator
        constructor(...params) {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }

        //getters and Setters
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
        get gender() { return this._gender; }
        set gender(gender) { this._gender = gender; }

        //Method
        toString() {
            //Options is used to format the output of date into user requirement
            const options = { year: 'numeric', month:'long', day: 'numeric' };
            const empDate = this.startDate === undefined ? "undefined" :
                this.startDate.toLocaleDateString("en-US", options);
            return "Id : " + this.id + ", Name : " + this.name + ", Salary : " + this.salary
                    + ", gender : " + this.gender + ", Start Date : " + empDate;
        }
    }

    //Creating object of class
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 2500.00);
    console.log(employeePayrollData.toString());

    //Change the value of name and id and print it
    employeePayrollData.name = "John";
    employeePayrollData.id = 2;
    console.log(employeePayrollData.toString());

    //Creating new employee with extended field
    let newEmployeePayrollData = new EmployeePayrollData(3, "Terrisa", 5000.00, "F", new Date());
    console.log(newEmployeePayrollData.toString());
}
