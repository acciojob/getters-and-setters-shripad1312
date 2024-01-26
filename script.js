//complete this code
class Person {
	person(name,age){
		this.name=name;
		this.age=age;
	}

	get name(){
		return this.name.toUpperCase();
	}
	get age(){
		return this.age.toUpperCase();
	}
	set name(name){
		this.name=name.toUpperCase();
	}
	set age(age){
		this.age=age.toUpperCase();
	}
}

class Student extends Person {
	Student(name,age){
		super(name,age);
	}
	study(){
		console.log(`${super.name} is studying `);
	}
}

class Teacher extends Person {
	Teacher(name,age){
		super(name,age);
	}

	teach(){
		console.log(`${super.name} is teaching `);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
