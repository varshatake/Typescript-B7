//1. Create Employee class with diff Properties

class Employee {
    empName: string;
    empId: number;
    empSalary: number;
    empDepartment : string;
}

var objE = new Employee();
objE.empName = "Jenny";
objE.empId = 11;
objE.empSalary = 20000;
objE.empDepartment = "HR";
console.log(objE.empName,objE.empId,objE.empSalary,objE.empDepartment);


//2. Make TransportAvail Property optional

interface Itransport {
    nameOftransporttype : string;
    isTranssportAvail? : boolean;
}

class Transport implements Itransport{
    nameOftransporttype = "Train";
    // dont need to give second property implementation because we can set it 'Optional' by ? 
}

var objT = new Transport();
console.log(objT.nameOftransporttype);
console.log(`Can not take isTransportAvail optional`);


