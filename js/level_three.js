const userMethods = {
	logIn() {
		console.log(`${this.name}: has logged in.`);
	},
	logOut() {
		console.log(`${this.name}: has logged out.`);
	},
	greet() {
		console.log(`Welcome:${this.name}.`);
	}
};

function User(name, email, age) {
	//! let user = {}; Object.create allows object too inherit parent properties/methods.
	let user = Object.create(userMethods);
	user.name = name;
	user.email = email;
	user.age = age;

	/*
	!Object.create removes the need too reference methods from "userMethods" constantly.
	!user.logIn = userMethods.logIn;
	!user.logOut = userMethods.logOut;
	!user.greet = userMethods.greet;
	 */
	return user;
}
