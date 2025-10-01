// The Word Translator

//  Usage: Use simple conditional statements

// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" for 
// the given language within the console window. If the user enters anything but those 
// four language codes, the application should default to English. 
// The result should be (for example):

// Hello World translated in French is: Bonjour le monde

let languageCode = prompt("Enter a two-character language code:");
let translatedHello = "Hello World";  // Default to English
// probably should be an error check if they entered anything but two lower case letters

if (languageCode === "es"  ) {
    translatedHello = "Hola Mundo";  // Spanish
}
else if (languageCode === "de") {
    translatedHello = "Hallo Welt";  // German
}
else if (languageCode === "fr") {
    translatedHello = "Bonjour le monde";  // French
}

if (languageCode === "en") {
    document.write("\"Hello World\" is how we say it in English!");
} else if (translatedHello === "Hello World") {
    document.write("We didn't translate it - \"Hello World\" is how we say it in English!");
} else {
    document.write(`Hello World translated in ${languageCode} is: ${translatedHello}`);
}


