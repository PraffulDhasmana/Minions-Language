

// console.log("script is working from a saperate js file")

// // Input

// var userName = prompt("Give me username")


// // Processing
// var welcomeMessage = "this script is working "+userName

// alert (welcomeMessage );

// query selector : A way to tell your browser to use any element(#btn-translate)
//document is api

// addEventListner intract with app listen to events(click is event below)

// clickHandler is call back

//exercise
// document.querySelector("textarea")
// .btn-primary
// #input-btn
// "input[name='translator']"

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");

outPutDiv.innerText = "Prafful"

console.log(txtInput);

function clickHandler() 
    {
        console.log("Clicked");
        console.log("Input " , txtInput.value);
        
    };

    btnTranslate.addEventListener("click", clickHandler)



