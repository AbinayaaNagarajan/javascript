console.log("Welcome to JS");
console.log(typeof 3.14); // Ressult will be number

/*identifier        name(camelCase)  assignment      Value       */                     

var                   myVariable     =               "my string";
let boolean= true;
const PI = 3.1415926;


//let statement
/**
 * Block scoped it can change values, can be reassigned.
 */

/*Example of scope */

/*Global scope */
let x = 10;

{
    let x = 2; /*Within this is block x is 2 */
    console.log(x);
}



/*outside of the block x is still 10 */


//const statement
//Block scope
const PI2 = 3.1555;
//PI2 = 3.14 // This will give an error


let myVar = "String name";

console.log(typeof myVar);

/* Arithmetic Operators */

console.log (10 % 2) //This shows remainder , Modulo

console.log (3+4); //Add

console.log (3*4);//Mul

console.log (5-4);//Sub

console.log (8/4);//Div

let reassign = 8;
reassign = reassign + 1;  // You can give it this way or 
reassign += 1;// you can give it this way too
reassign++ // Increment ur value
console.log(reassign);


/* Comparison Operator */

console.log(3>4) //Result is false
console.log(3==3) //Result is true
console.log(5<10)// true
console.log(10 != 2)//true
console.log(16<=8)//false
console.log(5>=5)//true

//==loose equals and check only value 3 =="3" /true
//===strictyle equals: check value and datatype 3==="3" /false

let andLogic = 3 > 2 && 6==6 && 5<10 //true
let andLogic1 = 1>2 && 6==7 //false


let orLogic = 3>2 || 6 == 7 //true one of the condition is true then its true
let orLogic1 = 3>4 || 6 ==7 // false

//bangLogic !

let bangLogic = !(3>2 || 6==6); //true
let bangLogic1 = 3 > 4 //false

//String concatenation

console.log ('Hello ' + 'world');
console.log('This is a '+ ' string '+  'am using');

console.log('the number is ' + 5);

console.log ('gello' - 'world'); // this is invalide NaN

// console.log('I ' + 'am ' + Abi); this is sentence


//end

const userName = 'Abinayaa Nagarajan';
console.log(userName[9]); // this is for index

const a = 1;
const b = 2;
console.log(`a is assigned a value ${a} and b is assigned a value of ${b} and my result is ${a+b}`);


/**const frost =
  'Nature's first green is gold, \n \
Her hardest hue to hold. \n \
Her early leaf's a flower; \n \
But only so an hour. \n \
Then leaf subsides to leaf. \n \
So Eden sank to grief, \n \
So dawn goes down to day. \n \
Nothing gold can stay.';

console.log(frost);

console.log(
  'They said, "this string doesn\'t need an escape," but that isn\'t true.'
);
*/


