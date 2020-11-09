{
    // UC 5 : Using function, while condition, and switch case
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HOURS_IN_MONTH = 100;

    let totalEmpHours = 0;
    let totalWorkingDays = 0;
    while (totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHours += getWorkingHours(empCheck);
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
    let empWage = totalEmpHours * WAGE_PER_HOUR;
    console.log("Total Days : " + totalWorkingDays + "\tTotal Hours : " + totalEmpHours + "\tEmp Wage : " + empWage);
}
