{
    // UC 6 : Store daily wage along with total wage into an array
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HOURS_IN_MONTH = 100;

    let totalEmpHours = 0;
    let totalWorkingDays = 0;
    let empdailyWageArray = new Array();
    while (totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        let empHours = 0;
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getWorkingHours(empCheck);
        totalEmpHours += empHours;
        empdailyWageArray.push(calculateDailyWage(empHours));
    }
    function getWorkingHours(empCheck) {
        let empHours = 0;
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    function calculateDailyWage(empHours) {
        return empHours * WAGE_PER_HOUR;
    }
    let totEmpWage = 0;
    function sum(dailyWage) {
        totEmpWage += dailyWage;
    }
    empdailyWageArray.forEach(sum);
    console.log("Total Days : " + totalWorkingDays + "\tTotal Hours : " + totalEmpHours + "\tEmp Wage : " + totEmpWage);
}
