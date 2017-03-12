console.log(a); // undefined

var a = {};
delete a;
console.log(a); // null

var string = "A string";
var anotherString = 'Another string';

var aNumber = 6;
var anotherNumber = 3.1412;

var aBollean = true;

var obj = {};
var anotherObj = {
  property1 : "a string",
  property2 : 10
}

console.log(typeof obj); // Object

- String, Number, Boolean;
- Array []
  var anArray = [1,2,3,4,5,"string"];
  console.log(anArray[0]); // 1
  var anArray = {
    0 : 1,
    1 : 2,
    2 : 3,
    3 : 4,
    4 : 5,
    5 : "string"
  }

  console.log(anArray.length); // 6
  console.error("An error occured");

- Function
- RegExp
- Date
- Error

var startTime = new Date(); // current time on this machine
// Do something here
var endTime = new Date();
console.log("Processing time: " + (endTime - startTime) + "ms");
