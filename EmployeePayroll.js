{
    const IS_NO_TIME = 0;
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HOURS_IN_MONTH = 100;

    {
        let empdailyWageArray = new Array();
        let empdailyWageMap = new Map();
        let totalEmpHours = 0;
        let totalWorkingDays = 0;
        let totalEmpWage = 0;

        while (totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            let dailyEmpHours = getDailyWorkingHours(empCheck);
            totalEmpHours += dailyEmpHours;
            empdailyWageArray.push(calculateDailyEmpWage(dailyEmpHours));
            empdailyWageMap.set(totalWorkingDays, calculateDailyEmpWage(dailyEmpHours))
        }

        function getDailyWorkingHours(empCheck) {
            switch (empCheck) {
                case IS_PART_TIME: return PART_TIME_HOURS;
                case IS_FULL_TIME: return FULL_TIME_HOURS;
                default:
                    return 0;
            }
        }

        function calculateDailyEmpWage(dailyEmpHours) {
            return dailyEmpHours * WAGE_PER_HOUR;
        }

        // 7A - Calculate total empWage using ForEach traversal and reduce method
        {
            function findTotalWage(dailyWage) {
                totalEmpWage += dailyWage;
            }
            empdailyWageArray.forEach(findTotalWage);
            console.log("Total employee wage calculated using ForEach method : " + totalEmpWage);

            function findTotalWages(totalWage, dailyWage) {
                return totalWage + dailyWage;
            }
            console.log("Total employee wage calculated using reduce method : " + empdailyWageArray.reduce(findTotalWages));
        }

        // 7B - Show the day along with DailyWage using Array map helper function
        let mapDayWithWageArr = null;
        {
            let dayCounter = 0;
            function mapDayWithWage(dailyWage) {
                dayCounter++;
                return dayCounter + "=" + dailyWage;
            }
            mapDayWithWageArr = empdailyWageArray.map(mapDayWithWage);
            console.log("Day count and wage map is \n " + mapDayWithWageArr);
        }

        // 7C - Show days when full time employee i.e. 160 earned
        {
            function fullTimeWage(dailyWage) {
                return dailyWage.includes("160");
            }
            let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
            console.log("Full time wage on given days : \n" + fullDayWageArr);
        }

        // 7D - Find the first occurrence when Full Time Wage was earned using find function
        {
            function findFirstFullTimeWage(dailyWage) {
                return dailyWage.includes("160");
            }
            console.log("First day of full time wage is : " + mapDayWithWageArr.find(findFirstFullTimeWage));
        }

        // 7E - Check if Every Element of Full Time Wage is truly holding Full time wage
        {
            // function isAllFullTimeWage(dailyWage) {
            //     return dailyWage.includes("160");
            // }
            console.log("If all the wages are of full time wage? : " + mapDayWithWageArr.every(dailyWage => dailyWage.includes("160")));
        }

        // 7F - Check if there is any Part Time Wage
        {
            // function isTherePartTimeWage(dailyWage) {
            //     return dailyWage.includes("80");
            // }
            console.log("Is there any part time wage present? : " + empdailyWageArray.some(dailyWage => dailyWage == 80));
        }

        // 7G - Find the number of days the Employee Worked
        {
            let workedDays = 0;
            function totalNoOfWorkedDays(dailyWage) {
                if (dailyWage > 0) {
                    return workedDays++;
                }
                return workedDays;
            }
            console.log("Total no of days employee worked is : " + empdailyWageArray.reduce(totalNoOfWorkedDays));
        }

        // UC -8 : Storing daily wage in a map and calculating total wage
        {
            // function findTotalWageUsingMap(totalWage, dailyWage) {
            //     return totalWage + dailyWage;
            // }

            let totalWage = 0;
            for (let value of empdailyWageMap.values()) {
                totalWage += value;
            }
            console.log("Total Employee wage calculated using map: " + totalWage);

        }

        console.log("Total Days : " + totalWorkingDays + "\t\tTotal Hours : " + totalEmpHours + "\tTotal Emp Wage : " + totalEmpWage);
    }
}
