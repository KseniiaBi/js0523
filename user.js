export default class User{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.warn(`Hello! My name is ${this.name}`);
	}
}