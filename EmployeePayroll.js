{
    class EmployeePayrollData{
        //property
        id;
        salary;

        //constructors
        constructor(id, name, salary){
            this.id=id;
            this.name=name;
            this.salary=salary;
        }

        //getters and Setters
        get name(){
            return this._name;
        }
        set name(name){ 
            this._name=name;
        }

        //Method
        toString(){
            return "Id : "+this.id +" Name : "+this.name +" Salary : "+this.salary;
        }
    }

    //Creating object of class
    let employeePayrollData=new EmployeePayrollData(1, "Mark", 2500.00);
    console.log(employeePayrollData.toString());

    //Change the value of name and id and print it
    employeePayrollData.name="John";
    employeePayrollData.id=2;
    console.log(employeePayrollData.toString());
}
