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
    let empdailyHoursAndWageArray = new Array();
    while (totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        let empHours = 0;
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getWorkingHours(empCheck);
        totalEmpHours += empHours;
        //Using js object to hold daily wage, day num and wage earned into an array
        empdailyHoursAndWageArray.push({
            dayNum: totalWorkingDays,
            dailyHours: empHours,
            dailyWage: calculateDailyWage(empHours),
            toString() {
                return '\nDay ' + this.dayNum + " => Working Hours is : " + this.dailyHours + " => And wage earned is : " + this.dailyWage;
            }
        });
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

    //UC 10 - Ability to store the Day,Hours Worked and Wage Earned in a single object.
    console.log("Showing daily hours worked and wage earned : " + empdailyHoursAndWageArray);
}
