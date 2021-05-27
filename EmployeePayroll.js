{ // UC 2 : Using switch case
    const IS_NO_TIME = 0;
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;

    {
        function getDailyWorkingHours(empCheck) {
            switch (empCheck) {
                case IS_PART_TIME: return PART_TIME_HOURS;
                case IS_FULL_TIME: return FULL_TIME_HOURS;
                default:
                    return 0;
            }
        }

        let totalEmpHours = 0;
        for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalEmpHours += getDailyWorkingHours(empCheck);
        }

        let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;

        console.log("Hours : " + totalEmpHours + " Emp Wage : " + totalEmpWage);
    }
}
