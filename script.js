function translateText () {
    let textToTranslate = document.getElementById("text").value;
    let translatedText = document.getElementById("result");
    let splitTextToTranslate = [];
    let textLength = textToTranslate.length;
    var j = 0;  // j var refers to textToTranslate

    for (i = 0; i < textLength; i++) {   // i var refers to the SplitTextToTranslate array
        splitTextToTranslate.push(textToTranslate[j]);    // creates a new element in the array
        console.log(splitTextToTranslate)
        j++
        while (textToTranslate[j] !== " " && j !== textLength-1) {   // separating number groups
            splitTextToTranslate[splitTextToTranslate.length-1] += textToTranslate[j];
            j++;    // incrementing the string position
        }
        console.log(splitTextToTranslate);
        j++;
        i++;
        // both i and j vars skipping the space characters 
    }

    splitTextToTranslate.length = 0;    // clears the array
}

function translateLetter() {
    let textToTranslate = document.getElementById("text").value;
    let translatedText = document.getElementById("result");

    
}