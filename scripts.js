//challenge 1 

firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => {
    console.log(parameter)
    console.log(parameter)
  }

function hobbyfunction () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

 hobbyfunction()
 

//challenge 2 

const add = (a, b) =>   a + b 

const multiply = (a, b) =>  a * b 

function internal() {
const added = this.add(this.internal.a, this.internal.b)
const multiplied = this.multiply(this.internal.a, this.internal.b)
return multiplied*added

}
//Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

console.log(example1.calculate())
console.log(example2.calculate())