{
    class EmployeePayrollData {
        //Property
        name;
        startDate

        //constructors : JS class can have only one constructor, so use spread operator
        constructor(...params) {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            if (params[4] > new Date()) throw "future date not allowed"
            {
                this.startDate = params[4];
            }
        }

        //getters and Setters
        get id() { return this._id; }
        set id(id) {
            let idRegex = RegExp('^[0-9]{1,}$');
            if (idRegex.test(id)) {
                this._id = id;
            }
            else throw "Id should be positive number."
        }
        get salary() { return this._salary; }
        set salary(salary) {
            let salaryRegex = RegExp('^[1-9]+[0-9]*$');
            if (salaryRegex.test(salary)) {
                this._salary = salary;
            }
            else throw "Salary should be positive real number."
        }
        get gender() { return this._gender; }
        set gender(gender) {
            let genderRegex = RegExp('[M,F]{1}$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            }
            else throw "invalid gender type"
        }

        //Method
        toString() {
            //Options is used to format the output of date into user requirement
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = this.startDate === undefined ? "undefined" :
                this.startDate.toLocaleDateString("en-US", options);
            return "Id : " + this.id + ", Name : " + this.name + ", Salary : " + this.salary
                + ", gender : " + this.gender + ", Start Date : " + empDate;
        }
    }

    //Creating object of class
    let employeePayrollData = new EmployeePayrollData(3, "Terrisa", 5000.00, "F", new Date());
    console.log(employeePayrollData.toString());

    //handling invalid id
    try {
        employeePayrollData.id = -2;
        console.log(employeePayrollData.toString());
    } catch (error) {
        console.error(error);
    }

    //handling invalid salary
    try {
        employeePayrollData.salary = -487;
        console.log(employeePayrollData.toString());
    } catch (error) {
        console.error(error);
    }

    //handling invalid gender
    try {
        employeePayrollData.gender = "S";
        console.log(employeePayrollData.toString());
    } catch (error) {
        console.error(error);
    }

    //handling invalid date, when given future date
    try {
        employeePayrollData.startDate = new Date("December 25, 2020");
        console.log(employeePayrollData.toString());
    } catch (error) {
        console.error(error);
    }
}