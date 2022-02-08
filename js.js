var UaP = {
    "dummyname": "cheeseburger"
}

let mc = document.querySelector('#midcol');
let sb = document.querySelector('#mySidepanel');

let mch = mc.offsetHeight;
let sbh = sb.offsetHeight;

if (mch > sbh) {
    document.getElementById('mySidepanel').setAttribute('style', 'height:' + mch + 'px;');
    document.getElementById('mySidepanel2').setAttribute('style', 'height:' + mch + 'px;');
}


var toggler = document.getElementById('darkmode')

function darkmode(){


    let body = document.querySelector('body');
    let bodycol = body.style.backgroundColor


    if (bodycol == "white"){
        body.setAttribute("style","background-color: rgb(24, 24, 24)")

    }
    if (bodycol == "rgb(24, 24, 24)"){
        body.setAttribute("style","background-color: white")
    }
}



var RegBut = document.getElementById("Registerbutton")
var LogBut = document.getElementById("LogIn")


function checkUser(){
    var UsrNme = document.getElementById("Username").value
    var Psswrd = document.getElementById("password").value

    
    if (UaP[UsrNme] == Psswrd){
        alert("you have succesfully logged in!")
        return
    }
    else if (UaP[UsrNme] != Psswrd){
        alert("wrong password or wrong Username - please try again or Register first!")
    }
    

}

function Register(){
    var UsrNme = document.getElementById("Username").value
    var Psswrd = document.getElementById("password").value
    var Psswrdr = document.getElementById("password2").value
    var lenU = UsrNme.length
    if (lenU > 5){
        if (Psswrd == Psswrdr){
            if("" + Psswrd.length + "" >7){
                UaP[UsrNme] = Psswrd;
                alert("Thank you "+UsrNme+" you have succesfully registered! (Please note that you cant actually use this data to log in since it is impossible to store data without a server [ignoring local storage])")
 
            }
            if(Psswrd.length <8){
                alert("Your Password is too short it has to be at least 8 characters, please try again!")

            }
        }
        if (Psswrd != Psswrdr){
            alert("Your Passwords dont match, please try again!")


        }
    }
    if (UsrNme.length < 6){
        alert("your username was too short,it has to be at least 6 characters, please try again!")

    }
        
}

