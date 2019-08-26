class Admin {
	constructor(name, email, access) {
		this.name = name;
		this.email = email;
		this.access = access;
	}
	getAuthority() {
		console.log(`${this.name} is a ${this.constructor.name}`);
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

class User extends Admin {
	constructor(name, email) {
		super(name, email);
	}
	deny() {
		console.log(`${this.name} cannot access this area.`);
	}
}

const admin1 = new Admin('Admin1', 'Admin1@gmail.com', 'Master Access');
const user1 = new User('user1', 'user1@gmail.com');
