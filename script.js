//complete this code
class Person {
	person(name,age){
		this.name=name;
		this.age=age;
	}

	get gname(){
		return this.name.toUpperCase();
	}
	get gage(){
		return this.age.toUpperCase();
	}
	set sname(name){
		this.name=name.toUpperCase();
	}
	set sage(age){
		this.age=age.toUpperCase();
	}
}

class Student extends Person {
	Student(name,age){
		Person(name,age);
	}
	study(){
		console.log(`${Person.gname} is studying `);
	}
}

class Teacher extends Person {
	Teacher(name,age){
		Person(name,age);
	}

	teach(){
		console.log(`${Person.gname} is teaching `);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
