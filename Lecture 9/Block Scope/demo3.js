// Nama: Nicholas Robert Kalangi
// create a Function
var printConsole = function () {
	
  // local scope example
  if (true) {
	let greeting = "Hi all students";
	
	// print #1
	console.log(greeting)
  }
  
  // print #2
  console.log(greeting)
  
}
printConsole()

// output:
// Hello Guys
// error: Uncaught ReferenceError: greeting is not defined