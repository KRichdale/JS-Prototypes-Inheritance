/* 
!new keyword in front of a function invocation javascript automatically add
let user = Object.create(User.prototype);
return user;
*/

function User(name, email) {
	//let user = Object.create(User.prototype);
	//! Replace with this
	this.name = name;
	this.email = email;
	//return user;
}
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
//const userOne = User('userOne', 'userOne@gmail.com');
//const userTwo = User('userTwo', 'userTwo@gmail.com');

const userOne = new User('userOne', 'userOne@gmail.com');
const userTwo = new User('userTwo', 'userTwo@gmail.com');
