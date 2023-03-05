function translateText () {
    let textToTranslate = document.getElementById("text").value.trim();
    let translatedTextOutput = document.getElementById("result");
    let translatedText = [''];
    let splitTextToTranslate = textToTranslate.split(" ");
    let asciiCode;
    let def = false;
    let higherThanLimit = false;    // checks whether the number group lenght is higher than the limit
    let numberGroup;
    var referenceNumbers = {
        '0': 32,
        '2': 65,
        '3': 68,
        '4': 71,
        '5': 74,
        '6': 77,
        '7': 80,
        '8': 84,
        '9': 87
    };
    translatedTextOutput.value = "";
    
    for (i = 0; i < splitTextToTranslate.length && !def && !higherThanLimit; i++) { // goes through the whole array while there's no error
        numberGroup = splitTextToTranslate[i];  //  numberGroup = group of numbers in i position
        console.log(numberGroup);
        for (j = 0; !def && j < numberGroup.length; j++) {
            if (numberGroup[j] !== numberGroup[j+1] && j+1 !== numberGroup.length) {    // checks if all numbers in the number group are the same
                def = true;
            }
        }
        if (((numberGroup[0] === '2' || numberGroup[0] === '3' || numberGroup[0] === '4' || numberGroup[0] === '5' || numberGroup[0] === '6' || numberGroup[0] === '8') && numberGroup.length > 3)  || numberGroup.length > 4) {
           document.getElementById("text").value = ""; // <= textToTranslate
           translatedTextOutput.value = "";
           higherThanLimit = true; // higherThanLimit checks whether the number of characters is higher than the limit allowed
        } else {
            if (!referenceNumbers[numberGroup[0]]) {    // checks if the values are in the object
                def = true;
                document.getElementById("text").value = "";  

            } else {
                asciiCode = referenceNumbers[numberGroup[0]];
            }
        }  if (!def && !higherThanLimit) {         // checks if default case case was activated
            if (asciiCode !== 32) {
                asciiCode += numberGroup.length -1;
            }
            translatedText[i] = [''];   // <= withouth this line it would always print "undentified"+letter
            translatedText[i] += String.fromCharCode(asciiCode);
        } 
    }
    
    if (def) {
        alert("Invalid character typed. Only numbers from 2 to 9 are valid, and number groups cannot have different numbers");
        document.getElementById("text").value = ""; // <= textToTranslate
        translatedTextOutput.value = "";
    } if (higherThanLimit) {
        alert("One of the number groups is higher than the limit allowed");
        document.getElementById("text").value = ""; // <= textToTranslate
        translatedTextOutput.value = "";
    } else {
        translatedTextOutput.value = translatedText.join("");
    }
}  

function translateLetter() {
    let textToTranslate = document.getElementById("text").value;
    let translatedText = document.getElementById("result");
    let asciiCode;
    let def = false;

    if (textToTranslate[0] !== '7' && textToTranslate[0] !=='9' && textToTranslate.length > 3) {
        alert('Only numbers 7 and 9 can have 4 digits');
        document.getElementById("text").value = "";
        translatedText.value = "";
        def = true;
    } else {
        switch (textToTranslate[0]) {        // this whole section is about JS finding out where to start counting the asciiCode from 
             case '2':                          // there was probably a more efficient way but I didn't know                          
                 asciiCode = 65;
             break;
             case '3':
                 asciiCode = 68;
             break;
             case '4':
                 asciiCode = 71;
             break;
             case '5':
                 asciiCode = 74;
             break;
             case '6':
                 asciiCode = 77;
             break;
             case '7':
                 asciiCode = 80;
             break;
             case '8':
                 asciiCode = 84;
             break;
             case '9':
                 asciiCode = 87;
             break;
             default:  
                 alert("Invalid character typed (only numbers from 2 to 9 are valid)"); 
                 def = true;
                 document.getElementById("text").value = ""; 
        }
    } if (!def) {         // checks if default case was activated
        asciiCode += textToTranslate.length-1;
        translatedText.value = String.fromCharCode(asciiCode);
    }
    document.getElementById("text").value = "";
}

function callTranslateTextByEnter() {
    if (event.keyCode === 13) {
        translateText();
    }
}

function callTranslateLetterByEnter() {
    if (event.keyCode === 13) {
        translateLetter();
    }
}