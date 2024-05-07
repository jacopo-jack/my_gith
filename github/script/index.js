// riscritto meglio anche con chat e ridimensionato
// ciò che voglio fare. La funzione header  nasconde il pulsante header
// mostrando il div con id navbar ovvero la navbar che poi me la genera
// chiamando generateheader()
function header() {
    let myheader = document.getElementById("myheader");
    myheader.style.display = "none";
    let mydiv = document.getElementById("navbar");
    mydiv.style.display = "block";
    generateheader();
}

function generateheader() {
    let mynavbar = document.getElementById("navbar");
    let linkNames = ["Home", "Chi sono", "Github", "Versione inglese"];
    let linkUrls = ["index.html", "about.html", "#", "#"];

    for (let i = 0; i < linkNames.length; i++) {
        let anchor = document.createElement("a");
        // Assegna l'URL e il testo personalizzato all'elemento <a>
        anchor.setAttribute("href", linkUrls[i]);
        anchor.setAttribute("class", "nav-link");
        anchor.textContent = linkNames[i];
        mynavbar.appendChild(anchor);
    }
}

// funzione analoga a header ma mostra il contenuto della section
// e la nav bar
function showcontent(){
    let mysection = document.getElementById("main_section");
    mysection.style.display = "none";
    let contents = document.getElementById("links");
    contents.style.display = "block";
    // chiamo header() per non cliccare ogni volta su header
    // almeno in teoria
    //header();
    
}
// altre possibili funzioni

