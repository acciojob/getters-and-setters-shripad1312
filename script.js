//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	get gname(){
		return this.name;
	}
	 
	set setage(age1){
		this.age=age1+1;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this.gname} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}

	teach(){
		console.log(`${this.gname} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
