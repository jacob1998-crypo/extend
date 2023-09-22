
class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address}`);
    }
  }
  
  //  Employee (inherits from Person)
  class Employee extends Person {
    constructor(name, age, address, employeeId, jobTitle) {
      super(name, age, address);
      this.employeeId = employeeId;
      this.jobTitle = jobTitle;
    }
  
    // display employee details
    displayEmployeeDetails() {
      this.displayDetails(); // Reuse the base class method
      console.log(`Employee ID: ${this.employeeId}`);
      console.log(`Job Title: ${this.jobTitle}`);
    }
  }
  
  //  Student (inherits from Person)
  class Student extends Person {
    constructor(name, age, address, studentId, schoolName) {
      super(name, age, address);
      this.studentId = studentId;
      this.schoolName = schoolName;
    }
  
    //  display student details
    displayStudentDetails() {
      this.displayDetails(); // Reuse class display details inperson
      console.log(`Student ID: ${this.studentId}`);
      console.log(`School Name: ${this.schoolName}`);
    }
  }
  
  // Create an instance representing a person who is both an employee and a student
  const personDetails = new Employee(
    'John',
    30,
    '23 kisumu',
    'EMP1ka',
    'Software Engineer'
  );
  
  personDetails.displayEmployeeDetails();
  console.log('\n');
  
  const studentDetails = new Student(
    'Jacob',
    2,
    '66 Nyeri',
    'CIT/00060/019',
    ' M\aseno University'
  );
  
  studentDetails.displayStudentDetails();
  