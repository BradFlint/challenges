// function named stringy that takes a size and returns a string of alternating '1s' and '0s'

function stringy(size){  // create function stringy and set parameter to size
		var string = '';    // create variable string
		for(var i = 0; i < size; i++){  //for loop sets i to zero and runs through loop as long as the size is less than i, i increments each loop through
			if(i % 2 == 0){     // if i by 2 if zero,
				string += '1';  // string 1
			}else {				// if not
				string += '0';	// string 0
			}
		}
		return string;  // returns the string with the output
}

// Given a non-negative integer, return an array containing a list of independent digits in reverse order
	
	var array = [9, 8, 5, 7];   // create an array
function printReverse(arr){  	// create printReverse function
	for(var i = arr.length -1; i >= 0; i--) {   // for loop gives the starting point(in this case index 3, array lenght-1), the condition (while i is greater than 1) and deincrement each loop through
		console.log(arr[i]);   // prints the entire array to the console
	}		
}
printReverse(array);


// Fibonacci number is the sum of the previous two sequence numbers. Notice the sequence pattern is the sum of the previous two numbers
// Build a function to illustrate how to get this sequence to output. 

function fib(times){  // create function fib
	var a = 0;	      // create var a, assign value to 0
	var b = 1;        // create var b, assign value to 1
	var ans = 0;      // create var ans, assign value to 0
	for(var i = 2; i <= times; i++){    // for loop set var i to 2, run while i is less than the number of times that assigned to times, increment i one each time thru the loop
		ans = a + b;   // answer is a +b
		a = b;		// a = b
		b = ans;    // b = answer
	}
	return ans;      // return answer
}


// recursion method to solve above problem
function fibRec(n){
	if(n <= 2){
		return 1;
	} else{
		return fibRec(n-1) + fibRec(n-2);
	}
}


// function called checkCoupon to verify that a coupon is valid and not expired. 
// If the coupon is good, return true. Otherwise, return false. A coupon expires at 
// the END of the expiration date.
// All dates will be passed in as strings in this format: "June 15, 2014".

function checkCoupon(date){  // create the function checkCoupon

	if (date <= "June 15, 2014"){  // if date is June 15, 2014 or before
		alert("true");			   // alert will print true if date is before june 15 
	}
	else {						   // if date is after june 15, 2014
		alert("false");			   // alert will print false
	}
};

var coupon = new checkCoupon("April 5, 2014");  // runs program with date Apri 5, 2014


// Write a function to test whether a given input is a valid email address. 
// For the purposes of this assessment, here is what makes a valid email: At least one letter
// character at the beginning All characters between the first character and the 
// @ (if any) must be letters, numbers, or underscores There must be an @ character 
// (after the points listed just now) After the @ character, there must be at least one word 
// character (letter, number, or underscore) or hyphen The email must end with at least 
// one set of a dot followed by one or more word characters. The input must NOT be 
// case-sensitive The function should return true or false.




  function emailTest(email){    // create function emailTest assign email parameter
    var userName = /(^[a-zA-Z])[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{1,}$/  // var userName tests the email to verify the input. ^ checks that the first characters are letters. then it tests that the 
    					// letters can be capital or lower case, that there is an @ sign, that the next charcters are letters (capital and lower)
    if (check.test(email)){   //next checks that there is a dot, then letters (again capital and lower) the 1 makes sure there is a least letter after the dot
    	alert("true");   		// check.test varifies the email input by user, if it 
    } else{					// email address has all of input varified, an alert will 
    	alert("false");  	// display true, if not, the alert will says false
    }
}

var a = emailTest('bradflint6@yahoo.com')












