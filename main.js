const Staff = require ("./staff.js")
//const {AdministrativeStaff, schoolManager, accountant, driver, securityGuard} = require("./AdministrativeStaff")
import {AdministrativeStaff, schoolManager, accountant, driver, securityGuard} from "./AdministrativeStaff";

// School class
class School {
    constructor(schoolName, logo, image, mission, vision, motto, proprietor, dateCreated, contactAddress) {
      this.schoolName = schoolName;
      this.logo = logo;
      this.image = image;
      this.mission = mission;
      this.vision = vision;
      this.motto = motto;
      this.proprietor = proprietor;
      this.dateCreated = dateCreated;
      this.contactAddress = contactAddress;
      this.administrativeStaff = [];
      this.teachers = [];
      this.students = [];
    }
  
    // Method to add administrative staff
    addAdministrativeStaff(staff) {
      this.administrativeStaff.push(staff);
      console.log(this.administrativeStaff);
    }
  
    // Method to remove administrative staff
    removeAdministrativeStaff(staff) {
      this.administrativeStaff = this.administrativeStaff.filter(s => s !== staff);
    }
  
    // Method to update administrative staff detail
    updateAdministrativeStaffDetail(staff, updatedDetail) {
      const index = this.administrativeStaff.indexOf(staff);
      if (index !== -1) {
        this.administrativeStaff[index] = { ...this.administrativeStaff[index], ...updatedDetail };
      }
    }
  
    // Method to view all administrative staff, teachers, and students
    viewAllStaffAndStudents() {
      const allStaffAndStudents = this.administrativeStaff.concat(this.teachers, this.students);
      return allStaffAndStudents;
    }
  
    // Method to view students in each class
    viewStudentsInClass(className) {
      const studentsInClass = this.students.filter(student => student.className === className);
      return studentsInClass;
    }
  }
  
  // AdministrativeStaff class
  
  
  // Teacher class
  class Teacher {
    constructor(name, subject, className) {
      this.name = name;
      this.subject = subject;
      this.className = className;
    }
  }
  
  // Student class
  class Student {
    constructor(name, age, className) {
      this.name = name;
      this.age = age;
      this.className = className;
    }
  }
  
  // Create a new school instance
  const mySchool = new School("My School", "logo.png", "image.png", "School mission", "School vision", "School motto", "Proprietor name", "01-01-2023", "1234 Main St");
  
  // Create administrative staff
  
  // Add administrative staff to the school
  mySchool.addAdministrativeStaff(schoolManager);
  mySchool.addAdministrativeStaff(accountant);
  mySchool.addAdministrativeStaff(driver);
  mySchool.addAdministrativeStaff(securityGuard);
  
  // Create teachers
  const mathTeacher = new Teacher("Math Teacher", "Math", "Class A");
  const scienceTeacher = new Teacher("Science Teacher", "Science", "Class B");
  
  // Add teachers to the school
  mySchool.teachers.push(mathTeacher);
  mySchool.teachers.push(scienceTeacher);
  
  // Create students
  const student1 = new Student("John", 10, "Class A");
  const student2 = new Student("Alice", 12, "Class B");
//   const student3 = new Student("
  
console.log(School.administrativeStaff);