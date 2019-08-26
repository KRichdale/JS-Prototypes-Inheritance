/*
!Prototype: is a property on a function that points too an object.
!Prototype: is just a property in javascript that every function has,it allows us too share methods across all instances of a function.
!Instance being different types of user/animals. Animal prototype (constructor) = Lion (Instance of Animal.prototype)
*/
//! (1) CONSTRUCTOR FUNCTION: Constructing an object.
function User(name, email) {
	//!(3) Use Object.create(User.prototype) too delegate properties/methods too child object (user). )
	let user = Object.create(User.prototype);
	user.name = name;
	user.email = email;

	//! RETURN YOUR FUNCTIONS
	return user;
}
//!(2) Adding methods too constructor functions prototype.
User.prototype.logIn = function() {
	console.log(`${this.name}: has logged in.`);
};

User.prototype.logOut = function() {
	console.log(`${this.name}: has logged out.`);
};

User.prototype.greet = function() {
	console.log(`Welcome:${this.name}.`);
};

//! Creating new users
const userOne = User('userOne', 'userOne@gmail.com');
const userTwo = User('userTwo', 'userTwo@gmail.com');
