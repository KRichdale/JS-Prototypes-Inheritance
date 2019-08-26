/*
! Basic Prototype Inheritance object, Only calls on one user and cannot be used repeatedly.
*/

//! Creates a user object.
const user = {};

//! Add's object properties. (Basic/inefficent/repetitive)
user.name = 'User';
user.email = 'Email@gmail.com';
user.location = 'Location';

//! Object methods (logIn, logOut, greet)
user.logIn = function() {
	console.log(`${this.name}: has logged in.`);
};

user.logOut = function() {
	console.log(`${this.name}: has logged out.`);
};

user.greet = function() {
	console.log(`Welcome:${this.name}.`);
};
