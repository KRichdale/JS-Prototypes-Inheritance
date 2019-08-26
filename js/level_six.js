//! Most updated and recent coding. Classes
//* ES6 CLASSES
class User {
	//*Similar too constructor function.
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	logIn() {
		console.log(`${this.name}: has logged in.`);
	}
	logOut() {
		console.log(`${this.name}: has logged out.`);
	}
	greet() {
		console.log(`Welcome:${this.name}.`);
	}
}

const userOne = new User('USER1', 'USER1@gmail.com');
const 