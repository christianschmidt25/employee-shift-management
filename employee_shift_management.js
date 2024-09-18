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