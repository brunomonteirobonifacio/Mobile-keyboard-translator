// this is not fully working, i just left it here to preserve it

function translateText () {
    let textToTranslate = document.getElementById("text").value;
    let translatedText = document.getElementById("result");
    let splitTextToTranslate = new Array();
    let textLength = textToTranslate.length;    // textLength var is mutable according to the code's needs
    let oneGroup = true;   // refers to whether there is only one group of numbers or more
    var j = 0;  // j var refers to textToTranslate

    textToTranslate = textToTranslate.trim();
    for (i = 0; i < textToTranslate.length && oneGroup; i++) {    // checks every character (but the last one) for a space, to see if there's only one group of numbers
        if (textToTranslate[i] !== ' ') {
            oneGroup = true;
        } else {
            oneGroup = false;
        }
    } 
    if (oneGroup) {
        splitTextToTranslate.push(textToTranslate);
    } else {
        for (i = 0; i < textLength; i++) {   // i var refers to the SplitTextToTranslate array
            splitTextToTranslate.push(textToTranslate[j]);  // creates a new element
            if ((textToTranslate[j+1] !== " ") && (textToTranslate[j+1] !== "")) {  // checks to see if there's anything else to add in the element
                while (textToTranslate[j] !== " " && j !== textToTranslate.length) {   // separating number groups
                    splitTextToTranslate[i] += textToTranslate[j];
                    j++;    // incrementing the string position
                }
            } else { 
                j++;
            }
            console.log(splitTextToTranslate);
            j++;
            textLength--;
            // j var skipping the space characters and i var keeping up with the difference between j and text length
        } 
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
    }
    console.log(def);
    if (!def) {         // checks if default case was activated
        asciiCode += textToTranslate.length-1;
        translatedText.value = String.fromCharCode(asciiCode);
    }
    document.getElementById("text").value = "";
}