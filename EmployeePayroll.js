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
   // console.log("Showing daily hours worked and wage earned : " + empdailyHoursAndWageArray);

    //UC 11-A : Calculate total hours and total wage earned
    let totalWages = empdailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    let totalHours = empdailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
                     .reduce((totalHour, dailyHrsAndWage) => totalHour += dailyHrsAndWage.dailyHours, 0);
    console.log("Total Wage : " + totalWages);
    console.log(("Total hours Worked : " + totalHours));

   // 11-B :  Show full working days using forEach
    process.stdout.write("Logging full woork Days");
    empdailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
    
    //11-C Show part time working using map by reducing to array
    let partWorkingDayArr = empdailyHoursAndWageArray
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours==4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
    console.log("Logging part time days :" +partWorkingDayArr);  
    
    //11-D Storing the day number where no working day using map function
    let nonWorkingDays=empdailyHoursAndWageArray
                       .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                       .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
    console.log("Non working days are : "+nonWorkingDays);

}
