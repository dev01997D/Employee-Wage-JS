{
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
    let empdailyWageMap = new Map();
    while (totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        let empHours = 0;
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getWorkingHours(empCheck);
        totalEmpHours += empHours;
        empdailyWageArray.push(calculateDailyWage(empHours));
        empdailyWageMap.set(totalWorkingDays, empHours);
    }
    function getWorkingHours(empCheck) {
        //let empHours = 0;
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

    console.log(empdailyWageArray);
    // UC 9 : calculate total wage, total hours worked 
    console.log("Total wage is : " + empdailyWageArray.reduce((totalWage, dailyWage) => totalWage + dailyWage, 0));
    let totalHoursWorked = Array.from(empdailyWageMap.values()).reduce((totalHours, dailyHours) => totalHours + dailyHours, 0);
    console.log("Total Hours : " + totalHoursWorked)
    console.log("Total Days : " + totalWorkingDays);

    //Show the full working days, part working days and no working days
    let nonWorkingdays = new Array();
    let fullWorkingDays = new Array();
    let partWorkingDays = new Array();

    empdailyWageMap.forEach((value, key, Map) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingdays.push(key);
    });
    console.log("Full working days : " + fullWorkingDays);
    console.log("Part working days : " + partWorkingDays);
    console.log("No working days : " + nonWorkingdays);
}
