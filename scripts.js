// const date: 2050
// const status: 'student'
// const count = 0

// if (date = 2050) {
// 	console.log("January", 'New Year’s Day'
// 	console.log("March", 'Human Rights Day')
// 	date = 'April'
// 	console.log(date, 'Family Day')
// 	console.log(date, 'Freedom Day')
// 	let count = count + 4

// 	if (status = "student") {
// 	  console.log('June', 'Youth Day')
// 		let count = count + 1
//   }

// 	console.log('August', 'Women’s Day')
// 	console.log('September', 'Heritage Day')
// 	date = 'December'
// 	console.log(date, 'Day of Reconciliation')
// 	let count = count + 3

// 	if (status = "parent") {
// 	  console.log(date, 'Christmas Day')
// 		let count = count + 1
//   }

// 	console.log(date, 'Day of Goodwill')
// 	let count = count + 1
// }

// console.log('Your status is:', status)
// console.log('The year is:', date)
// console.log('The total holidays is:', count)

//solution

const date = 2050;
const status = 'student';
let count;

if (date == 2050) {
    let Date = '';

	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	Date = 'April'
	console.log(Date, 'Family Day')
	console.log(Date, 'Freedom Day')
	count = count + 4

	if (status == "student") {
	  console.log('June', 'Youth Day')
	  count = count + 1
    }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	Date = 'December'
	console.log(Date, 'Day of Reconciliation')
	count = count + 3

	if (status == "parent") {
	    console.log(Date, 'Christmas Day')
	    count = count + 1
    }

	console.log(Date, 'Day of Goodwill')
	count = count + 1
}

console.log('')
console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)