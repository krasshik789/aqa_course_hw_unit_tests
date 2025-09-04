class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

 
  get firstName() { 
    return this._firstName; 
  }
  
  set firstName(value) {
     if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error("firstName должно содержать только латинские буквы (2-50 символов)");
    }
    this._firstName = value; 
  }

  get lastName() { 
    return this._lastName; 
  }
  
  set lastName(value) { 
    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error("firstName должно содержать только латинские буквы (2-50 символов)");
    }
    this._lastName = value; 
  }

  get profession() {
    return this._profession; 
  }

  set profession(value) { 
    if (!/^[A-Za-z ]+$/.test(value) || value.trim().length === 0) {
      throw new Error("Строка, не может быть пустой, только латинские буквы и пробелы");
    }
    this._profession = value; 
  }

 
  get salary() {
    return this.#salary; 
  }

  set salary(value) {
    if (typeof value !== 'number' ||isNaN(value)|| value <= 0 || value >= 10000) {
      throw new Error('Число, должно быть больше 0 и меньше 10000');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}


class Company {
#employees

  constructor (title,phone,address,employees = []){
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees
  }

get title(){
  return this._title
}

get phone(){
  return this._phone
}

get address(){
  return this._address
}

addEmployee(employee){
  if(!(employee instanceof Employee)){
    throw new Error ('is not an instance of the class')
  }
   this.#employees.push(employee)
}

getEmployees() {
  return this.#employees
}
getInfo() {
  return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`
}
findEmployeeByName(firstName) {
  const emp = this.#employees.find(el => el.firstName === firstName)
  if(!emp){
    throw new Error ('Cотрудник не найден')
  }
  return emp
}

removeEmployee(firstName) {
  const index = this.#employees.findIndex(emp => emp.firstName === firstName);
  if (index === -1) {
    throw new Error(`Сотрудник с именем ${firstName} не найден`);
  }
  this.#employees.splice(index, 1);
}

  getTotalSalary() {
    return this.#employees.reduce((sum, e) => sum + e.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]



export { Employee, Company };

