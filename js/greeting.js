var welcomeUser = function welcomeUser(){
    var userName = prompt('What\'s your name?');

    if(!userName){
        // welcomeUser();
    }
    else{
        // alert('Hello ' + userName);
        document.querySelector('#greeting').innerHTML = `<h1>Hello ${userName}</h1>`;
    }
};

welcomeUser();