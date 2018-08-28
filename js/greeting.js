/* TODO:
1. create variables that represent each of the primitive data types we learned about tonight (hint: there should be 5 of these)
2. use console.log to show each of the variables from part 1 in the developer console
3. combine steps 1 and 2 into a single function
4. invoke the function from part 3 on page load/reload
5. BONUS: repeat steps 1-4 with both of the complex data types we learned about!
*/

var simpleLogdataTypes = function logDataTypes(){
    var number = 1234;
    var string = 'west coast';
    var trueOrFalse = false;
    var nullVar = null;
    var undefinedVar;

    console.log(number);
    console.log(string);
    console.log(trueOrFalse);
    console.log(nullVar);
    console.log(undefinedVar);
};

var logDataTypesArray = function logDataTypesArray(){
    var arrayOfTypes = [ 1234, 'west coast', false, null, undefined ];

    console.log(arrayOfTypes[0]);
    console.log(arrayOfTypes[1]);
    console.log(arrayOfTypes[2]);
    console.log(arrayOfTypes[3]);
    console.log(arrayOfTypes[4]);
};

var logDataTypesObject = function logDataTypesObject(){
    var objectWithTypes = { 'number': 1234, 'string': 'west coast', 'boolean': false, 'null': null , 'undefined': undefined };

    console.log(objectWithTypes['number']);
    console.log(objectWithTypes['string']);
    console.log(objectWithTypes['boolean']);
    console.log(objectWithTypes['null']);
    console.log(objectWithTypes['undefined']);
};

// simpleLogdataTypes();
logDataTypesArray();
logDataTypesObject();
/* var welcomeUser = function welcomeUser(){
    var userName = prompt('What\'s your name?');

    if(!userName){
        welcomeUser();
    }
    else{
        alert('Hello ' + userName);
    }
};

welcomeUser(); */