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

    //UC 7-A : Calculate total hours and total wage earned
    let totalWages = empdailyHoursAndWageArray
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    console.log("Total Wage Earned is : "+totalWages);

    //UC-7B : Show day along with daily wage using a map
    let dayWithDailyWageMap= new Map();
    empdailyHoursAndWageArray.map(dailyHrsAndWage=>{
        dayWithDailyWageMap.set(dailyHrsAndWage.dayNum, dailyHrsAndWage.dailyWage);
    });
    console.log("Showing each day with wage earned : ");
    for(let [key ,value] of dayWithDailyWageMap){
        console.log("Day Number : "+key + ", Wage earned : "+value);
    }

    //7-C :  Show full working days using forEach
    console.log("Logging full woork Days");
    empdailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==8)
                             .forEach(dailyHrsAndWage =>console.log(dailyHrsAndWage.toString()));

    //7-D : Finding first occurence of full time wage
    console.log("First day of full time wage is given below : " + empdailyHoursAndWageArray
                                                                  .find(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8));

    //7-E - Check if Every Element of Full Time Wage is truly holding Full time wage
    console.log("If all the wages are of full time wage? : " + empdailyHoursAndWageArray
                                                               .every(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160));

    //11-F - Check if there is any Part Time Wage
    console.log("Is there any part time wage present? : " + empdailyHoursAndWageArray
                                                            .some(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4));

    //11-G - Find the number of days the Employee Worked
    console.log("Total no of days employee worked is : " + empdailyHoursAndWageArray
                                                           .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours>0)
                                                           .reduce((totalWorkedDays, dailyHrsAndWage) => totalWorkedDays+=1, 0));
}
