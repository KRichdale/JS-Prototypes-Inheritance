const parent = {
	name: 'Father',
	age: 50,
	descent: 'european'
};

const child = Object.create(parent);
child.name = 'Kid';
child.age = 10;
