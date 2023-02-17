let cnvrt = document.getElementById("convert-btn");

let cmlcs = document.getElementById("camel-case");
let pclcs = document.getElementById("pascal-case");
let snkcs = document.getElementById("snake-case");
let asnkcs = document.getElementById("screaming-snake-case");
let kebabcs = document.getElementById("kebab-case")
let scrkebabcs = document.getElementById("screaming-kebab-case")

let myname = "";

function convert(){
    myname = document.getElementById("text").value.toLowerCase();
    camel();
    pascal();
    snake();
    angrysnake();
    kebab();
    scrkebab()
}


// Camel Case
function camel(){
    let cameltxt = "";
    for(i = 0; i < myname.length; i++){
        if(myname[i] == " "){
            cameltxt = cameltxt + myname[i+1].toUpperCase();
            continue;
        }
        else if(myname[i-1] == " "){
            continue;
        }
        else cameltxt = cameltxt + myname[i]
    }
    cmlcs.textContent = cameltxt;
}

// Pascal Case
function pascal(){
    let pascaltxt = "";
    for(i = 0; i < myname.length; i++){
        if(i == 0){
            pascaltxt = pascaltxt + myname[i].toUpperCase()
        }
        else if(myname[i] == " "){
            pascaltxt = pascaltxt + myname[i+1].toUpperCase();
            continue;
        }
        else if(myname[i-1] == " "){
            continue;
        }
        else pascaltxt = pascaltxt + myname[i]
    }
    pclcs.textContent = pascaltxt;
}

// Snake Case
function snake(){
    let snaketxt = "";
    for(i = 0; i < myname.length; i++){
        if (myname[i] == " "){
            snaketxt = snaketxt + "_";
        }
        else snaketxt = snaketxt + myname[i]
    }
    snkcs.textContent = snaketxt;
}

// Screaming Snake Case
function angrysnake(){
    let asnaketxt = "";
    for(i = 0; i < myname.length; i++){
        if (myname[i] == " "){
            asnaketxt = asnaketxt + "_";
        }
        else asnaketxt = asnaketxt + myname[i];
    }
    asnkcs.textContent = asnaketxt.toUpperCase();
}

// Kebab Case
function kebab(){
    let kebabtxt = "";
    for(i = 0; i < myname.length; i++){
        if (myname[i] == " "){
            kebabtxt = kebabtxt + "-";
        }
        else kebabtxt = kebabtxt + myname[i];
    }
    kebabcs.textContent = kebabtxt;
}

// Screaming Kebab Case
function scrkebab(){
    let scrkebabtxt = "";
    for(i = 0; i < myname.length; i++){
        if (myname[i] == " "){
            scrkebabtxt = scrkebabtxt + "-";
        }
        else scrkebabtxt = scrkebabtxt + myname[i];
    }
    scrkebabcs.textContent = scrkebabtxt.toUpperCase();
}