// Write your solution in this file!
const employee = {}
employee.name=["Sam"]
employee.streetAddress={}

function updateEmployeeWithKeyAndValue(object, key, value) {
return {...object,[key]: value}
};

updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value; 
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetaddress", "12 Broadway")

function deleteFromEmployeeByKey(object, key, value) {
    return {...object,[key]: value};
};

const newEmployee = deleteFromEmployeeByKey(employee, "name","");

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    object[key] = value;
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, "name","");



