//1. Create Employee class with diff Properties
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var objE = new Employee();
objE.empName = "Jenny";
objE.empId = 11;
objE.empSalary = 20000;
objE.empDepartment = "HR";
console.log(objE.empName, objE.empId, objE.empSalary, objE.empDepartment);
var Transport = /** @class */ (function () {
    function Transport() {
        this.nameOftransporttype = "Train";
        // dont need to give second property implementation because we can set it 'Optional' by ? 
    }
    return Transport;
}());
var objT = new Transport();
console.log(objT.nameOftransporttype);
