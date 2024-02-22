function internationalHello(language) {
    if (language === "es") {
        return "Hello World translated in Spanish is: Hola, mundo"
    }
    if ( language === "de") {
        return "Hello World translated in German is: Hallo Welt"
    }
    if ( language === "fr") {
        return "Hello World translated in French is: Bonjour le monde"
    }
    else {
        return "Hello World translated in English is: Hello World"
    }

}




let lang = prompt("enter one of the following codes please: 'es', 'de', 'en', 'fr'");
document.write(internationalHello(lang));