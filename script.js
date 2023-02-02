function translateText () {
    let textToTranslate = document.getElementById("text").value;
    let translatedText = document.getElementById("result");
    let splitTextToTranslate = new Array();
    let textLength = textToTranslate.length;
    var j = 0;  // j var refers to textToTranslate

    for (i = 0; i < textLength; i++) {   // i var refers to the SplitTextToTranslate array
        splitTextToTranslate.push(textToTranslate[j]);  // creates a new element
        if ((textToTranslate[j+1] !== " ") && (textToTranslate[j+1] !== "")) {  // checks to see if there's anything else to add in the element
            while (textToTranslate[j] !== " " && j !== textLength) {   // separating number groups
                splitTextToTranslate[i] += textToTranslate[j];
                j++;    // incrementing the string position
            }
        } else { 
            j++;
        }
        console.log(splitTextToTranslate);
        j++;
        textLength--;
        // both i and j vars skipping the space characters 
    }
}

function translateLetter() {
    let textToTranslate = document.getElementById("text").value;
    let translatedText = document.getElementById("result");
    let asciiCode;

    if ((textToTranslate[0] !== '2') && (textToTranslate[0] !== '3') && (textToTranslate[0] !== '4') && (textToTranslate[0] !== '5') && (textToTranslate[0] !== '6') && (textToTranslate[0] !== '7') && (textToTranslate[0] !== '8') && (textToTranslate[0] !== '9')){
        alert("Invalid character typed (only numbers from 2 to 9 are valid)");
        translatedText.value = "";
    } else if (textToTranslate[0] !== '7' && textToTranslate[0] !== '9' && textToTranslate.length > 3) {
        alert("The Maximum number of characters for those numbers is 3!");
        translatedText.value = "";
    } else switch (textToTranslate[0]){                                // this whole section is about JS finding out where to start counting the asciiCode from
        case '2':    // there was probably a more efficient way but I didn't know
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
    }
        asciiCode += textToTranslate.length-1;
        translatedText.value = String.fromCharCode(asciiCode);
    document.getElementById("text").value = "";
}