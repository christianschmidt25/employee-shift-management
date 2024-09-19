// Task 1: Create an Employees Array of Employee Objects

const employees = [
    {name: 'Christian', shifts: [ {day: 'Monday', hours: 8}, {day: 'Wednesday', hours: 8} ]},
    {name: 'Jolie', shifts: [ {day: 'Wednesday', hours: 5}, {day: 'Thursday', hours: 6} ]},
    {name: 'Isaac', shifts: [ {day: 'Tuesday', hours: 10}, {day: 'Friday', hours: 12} ]},
    {name: 'Sofia', shifts: [ {day: 'Saturday', hours: 1}, {day: 'Sunday', hours: 1} ]}
];
//my employees and their schedules!

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employeeName) {
    const employee = employees.find(employee => employee.name === employeeName); 
        console.log(`Employee Name: ${employee.name}`);
        console.log(`Shifts:`);
        employee.shifts.forEach(shift => { //finds each shift in the array that the employee works
            console.log(`Day: ${shift.day}, Hours: ${shift.hours}`)
        })
}

displayEmployeeShifts('Isaac')


// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find(employee => employee.name === employeeName);
    const existingShift = employee.shifts.find(shift => shift.day === day); //creates existing shift, and finds if a certain day is already in the employee's shift array

    if (existingShift) { //if the shift exists (and the day is already in the shift array), will log error message
        console.log(`Cannot schedule: ${employeeName} is already assigned to work on ${day}.`);
    }
    else { 
        employee.shifts.push({day: day, hours: hours}); //if applicable, it will push this new shift into the array and log the message.
        console.log(`${employeeName} is now scheduled to work a shift on ${day}.`);
    }
}

assignShift('Sofia', 'Saturday', 5)
assignShift('Jolie', 'Saturday', 5)

displayEmployeeShifts('Jolie') //ensures new Saturday shift is loaded


// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    const employee = employees.find(employee => employee.name === employeeName);

    const totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0); //brings the employees hours to one value, creating a sum from the shift hours and starting at 0.
     {
        console.log(`${employeeName} is working a total of ${totalHours} this week.`);
    }
}

calculateTotalHours('Jolie')


// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    const availableEmployees = employees.filter(employee => !employee.shifts.find(shift => shift.day === day)); 
    //creates availableEmployees, which checks each employee that does not have a shift on the given day and puts them in this category
    
    if (availableEmployees)
        console.log(`Available Employees on ${day}: ${availableEmployees.map(employees => employees.name)}`)
} //if they do not have a shift, the available employees will be mapped so all of the employees not working will be included

listAvailableEmployees('Saturday')