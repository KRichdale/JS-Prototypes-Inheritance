/*
! Basic Prototype Inheritance object, Only calls on one user and cannot be used repeatedly.
*/

function User(name, email, age) {
	//! Creates a user object.
	const user = {};
	//! Add's object properties. (Basic/inefficent/repetitive)
	user.name = name;
	user.email = email;
	user.age = age;

	//! Object methods (logIn,logOut,greet)
	user.logIn = function() {
		console.log(`${this.name}: has logged in.`);
	};

	user.logOut = function() {
		console.log(`${this.name}: has logged out.`);
	};

	user.greet = function() {
		console.log(`Welcome:${this.name}.`);
	};
	return user;
}

const userOne = User('userOne', 'userOne@email.com', 25);
const userTwo = User('userTwo', 'userTwo@email.com', 10);
