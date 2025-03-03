var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPassInput = document.getElementById("userPass");

var signEmailInput = document.getElementById("signEmail");
var signPassInput = document.getElementById("signPass");

var users ;

if(localStorage.getItem("usersList")==null){
    var users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usersList"));
}
function addUser(){
    if(!checkIsEmpty()){
        if(exist()){
            displayExist();
        }
        else{
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPassInput.value,
        }
        users.push(user);
        localStorage.setItem("usersList",JSON.stringify(users));
        displaySucess()
        
    }
    
    }
    else{
        displayRequired();
    }
   
   
};
function  welcome(){
    document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("homeList"))}`;
};
function exist(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==userEmailInput.value ){
            return true; 
        }
    }
    return false;
}
function existLogin(){
for(var i=0;i<users.length;i++){
    if(users[i].email==signEmailInput.value && users[i].password==signPassInput.value){
        console.log(users[i].name);
        var name=users[i].name;
        localStorage.setItem("homeList",JSON.stringify(name));
        location.replace("home.html");
    
       return true;
    }
}
};
function searchUser(){
    if(checkIsEmptySign()){
        displayRequiredSign();
    }
    else{
        if( existLogin()){

        }
        else{
            displayIncorrect();
        }
        
    }

};
function clearForm(){
   userNameInput.value="";
   userEmailInput.value="";
   userPassInput.value="";
};

function checkIsEmpty(){
    if(userNameInput.value!="" && userPassInput.value !="" && userEmailInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}
function checkIsEmptySign(){
    if(signEmailInput.value =="" || signPassInput.value =="" ){
        return true;
    }
    else{
        return false;
    }
}


function displayRequired(){
    document.getElementById("required").innerHTML=`<p class=' text-danger'>All inputs is required</p>`;
};
function displayExist(){
    document.getElementById("required").innerHTML=`<p class=' text-danger'>email already exists</p>`;

};
function displayIncorrect(){
    document.getElementById("result-sign").innerHTML=`<p class=' text-danger'>incorrect email or password</p>`;
};
function displayRequiredSign(){
    document.getElementById("result-sign").innerHTML=`<p class=' text-danger'>All inputs is required</p>`;
};
function displaySucess(){
    document.getElementById("required").innerHTML=`<p class=' text-success'>Success</p>`;
};