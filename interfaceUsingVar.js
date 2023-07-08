var emp = {
    empName: "john",
    empId: 10,
    empSal: 5000,
    display: function () {
        console.log(this.empName, this.empId, this.empSal);
    },
};
console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSal);
console.log(emp.display());
