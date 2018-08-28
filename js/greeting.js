/* var changeAndShout = function changeAndShout(name){
    if(name === 'Blah'){
        name = 'Travis';
    }
    else{
        name = 'Blah';
    }
    alert(name);
};

changeAndShout('Blah'); */

var welcomeUser = function welcomeUser(){
    var userName = prompt('What\'s your name?');

    if(!userName){
        welcomeUser();
    }
    else{
        alert('Hello ' + userName);
    }
};

welcomeUser();
