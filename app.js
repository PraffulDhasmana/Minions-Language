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
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.praffuldhasmana.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Kuch Gadbad H", error)
    alert("something wrong with server: bbad mein aio")
}

function clickHandler() {

    var inputText = txtInput.value; // taking input}

    //calling server for processing

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })

        .catch(errorHandler)

    };

    btnTranslate.addEventListener("click", clickHandler)