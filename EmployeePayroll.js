{
    //UC 1 : Checking Employee Present Or Absent
    const IS_ABSENT=0;
    const IS_PRESENT=1;
    
    let empCheck=Math.floor(Math.random()*10)%2;

    if (empCheck==0){
    console.log("Employee is PRESENT.");
    return;
    }
    else{
        console.log("Employee is ABSENT.");
    }
}