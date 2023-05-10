class Staff{

    staff = {};

    constructor(name, email, password, role, dateCreated, salary){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.dateCreated = dateCreated;
        this.salary = salary;
    }

    save(){

    }

    createStaff(){

    }

    getStaff(){ 
        return 
    }

    getSalary(){
        return this.salary
    }

    setSalary(){

    }

    getname(){
        return this.name
    }

    getDetails(){
        this.staff['name'] = this.name;
        this.staff['email'] = this.email;
        this.staff['password'] = this.password;
        this.staff['role'] = this.role;
        this.staff["dateCreated"] = this.dateCreated;
        this.staff["salary"] = this.salary
        return this.staff;
    }

    updatestaff(currentValue, newValue){
        this.staff[currentValue] = newValue;
    }

}

var A0001 = new Staff("Ifeanyi Okoli", "fnykl@yahoo.com", "welccome123", "School Manager", "April 15, 2023", "$2000");
var A0002 = new Staff("John Josiah", "josiah@yahoo.com", "welccome123", "Accountant", "April 15, 2023", "$1000");
var A0003 = new Staff("Samuel Adikwu", "samuel@yahoo.com", "welccome123", "Driver", "April 15, 2023", "$500");
var A0004 = new Staff("Onuchi Wisdom", "onuchi@yahoo.com", "welccome123", "Security", "April 15, 2023", "$500");
var A0005 = new Staff("Peterside Idah", "peterside@yahoo.com", "welccome123", "Admin", "April 15, 2023", "$800");
 

for (let staff of [A0001, A0002, A0003, A0004, A0005]){
    console.log(staff.getDetails())
}

module.exports.Staff = Staff;