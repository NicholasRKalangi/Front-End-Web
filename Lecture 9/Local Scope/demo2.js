// Nama: Nicholas Robert Kalangi
// Local Scope or function Scope
function printAlert() {
  var greeting = "Hi all students";
  alert(greeting)
}

// call function
printAlert()
// Output : "Hi all students"

// create a function
function printConsole(param) {
  console.log(param)
}

// call function
printConsole(greeting)
// Output: "error: Uncaught ReferenceError: greeting is not defined"
