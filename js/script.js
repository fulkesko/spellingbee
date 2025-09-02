const DICCIONARIO = {
    "1_grade": {
        "Normal Round": [
            "leg", "ant", "small", "got", "pet",
            "back", "Max", "pen", "dad", "pot",
            "bag", "lip", "tent", "fat", "quick",
            "big", "hop", "up", "Ron", "rock",
            "comb", "sit", "wig", "lock", "sick",
            "can", "not", "way", "fish", "see",
            "rat", "pants", "wet", "help", "sad",
            "fits", "pat", "wing", "hot", "song",
            "bad", "mat", "use", "fox", "ring",
            "did", "man", "van", "kit", "pen"
        ],
        "Extra Round": [

        ]
    }, "2_grade": {
        "Normal Round": [
            "feathers", "afraid", "trunk", "cake", "lost",
            "again", "friends", "sing", "always", "games",
            "think", "dance", "monkey", "baby", "her",
            "Tuesday", "dresses", "nothing", "ball", "hurry",
            "slower", "club", "lucky", "anyone", "growing",
            "spring", "chair", "morning", "after", "heavy",
            "under", "ducks", "our", "bigger", "Jack",
            "water", "egg", "nose", "bird", "window",
            "ear", "saddest", "body", "July", "everyone",
            "sang", "wish", "kisses", "fastest", "seed"
        ],
        "Extra Round": [

        ]
    }, "3_grade": {
        "Normal Round": [
            "experiment", "chase", "morning", "state", "world",
            "country", "enjoy", "machines", "miss", "safe",
            "shape", "woman", "bunch", "early", "listen",
            "rescue", "whale", "build", "dust", "spider",
            "nests", "someone", "wonderful", "cover", "excited",
            "lunch", "smile", "talking", "climb", "everything",
            "lemonade", "late", "people", "amphibian", "dropping",
            "hungry", "pineapple", "vapor", "brave", "drawing",
            "horse", "vote", "born", "danger", "Wednesday",
            "mammals", "teacher", "amazing", "different", "fire"
        ],
        "Extra Round": [
        ]
    }, "4_grade": {
        "Normal Round": [
            "Sunday", "motion", "thousand", "Christmas", "gardener",
            "minute", "soap", "boring", "fridge", "worried",
            "million", "sequence", "butterfly", "flippers", "uniform",
            "mechanic", "quarter", "because", "envelope", "spotted",
            "together", "March", "private", "bicycle", "enough",
            "worth", "leave", "passenger", "geography", "path",
            "backyard", "dynamic", "glove", "hatch", "penguin",
            "actor", "dessert", "twice", "August", "daughter",
            "tooth", "great", "parents", "actually", "chess",
            "wasn’t", "through", "November", "aunts", "character"
        ],
        "Extra Round": [
        ]
    }, "5_grade": {
        "Normal Round": [
            "newspaper", "shopping", "camera", "explore", "waitress",
            "nowhere", "screen", "business", "electricity", "young",
            "kingdom", "relaxing", "breakfast", "dollar", "visited",
            "join", "quick", "before", "didn’t", "umbrella",
            "juice", "quietly", "autumn", "choose", "tomorrow",
            "journey", "people", "assistant", "correct", "traffic",
            "introduce", "potatoes", "August", "crowded", "summer",
            "healthy", "photography", "address", "college", "strange",
            "hobby", "passport", "anybody", "cinnamon", "sometimes",
            "exciting", "message", "accident", "chemist", "sentence"
        ],
        "Extra Round": [
        ]
    }, "6_grade": {
        "Normal Round": [
            "noisy", "Switzerland", "career", "guide", "windscreen",
            "medicine", "special", "campsite", "glasses", "wilderness",
            "luggage", "spaghetti", "building", "favourite", "yourself",
            "kilometre", "sweater", "busy", "fantastic", "women",
            "journalist", "somewhere", "brought", "foreign", "wedding",
            "impossible", "surprised", "blanket", "factory", "wasn’t",
            "hosts", "telephone", "quiet", "scratch", "amazing",
            "downstairs", "vegetable", "heavy", "couldn’t", "affirmative",
            "download", "thunderstorm", "healthy", "passenger", "advance",
            "comfortable", "thousand", "hairdryer", "opposite", "account"
        ],
        "Extra Round": [
        ]
    }

};

let ELEMENTOS = {};

function refreshELEMENTOS() {
    ELEMENTOS = {
        texto: document.getElementById('texto'),
        numero: document.getElementById('numero'),
        dropdownMenuButton: document.getElementById('dropdownMenuButton'),
        icono: document.getElementById('icono')
    };
}
const GRADES_MAP = {
    "1_grade": "1st Grade",
    "2_grade": "2nd Grade",
    "3_grade": "3rd Grade",
    "4_grade": "4th Grade",
    "5_grade": "5th Grade",
    "6_grade": "6th Grade"
};



let intervalo;
let palabrasSeleccionadas = [];

function resetearAnimacion() {
    ELEMENTOS.texto.textContent = '';
    const abeja = document.getElementById('abeja');
    abeja.style.opacity = '0';
    abeja.classList.remove('girar-abeja');
}

function girarNumeros(grade) {
    if (ELEMENTOS.icono.getAttribute('alt') === 'disabled') return;

    ELEMENTOS.icono.setAttribute('alt', 'disabled');

    const valorElemento = ELEMENTOS.dropdownMenuButton.getAttribute('value');

    if (valorElemento == 'notselect') {
        resetearAnimacion();
        iniciarAnimacionEscritura("Bzz choose a round");
        return;
    }
    ELEMENTOS.numero.textContent = '0';
    ELEMENTOS.numero.style.paddingTop = '15%';
    ELEMENTOS.numero.style.fontSize = '10em';
    const totalPalabrasRonda = DICCIONARIO[grade][valorElemento].length;

    resetearAnimacion();

    intervalo = setInterval(() => {
        let randomNum = getRandomInt(1, totalPalabrasRonda + 1);
        ELEMENTOS.numero.textContent = randomNum;
    }, 100);

    setTimeout(() => {

        clearInterval(intervalo);

        if (palabrasSeleccionadas.length === totalPalabrasRonda) {
            ELEMENTOS.numero.textContent = '0';
            iniciarAnimacionEscritura("Bzz I ran out of Words");
            return;
        }

        let finalNum, palabraAsociada;

        do {
            finalNum = getRandomInt(1, totalPalabrasRonda + 1);
            palabraAsociada = DICCIONARIO[grade][valorElemento][finalNum - 1];
        } while (palabrasSeleccionadas.includes(palabraAsociada));

        ELEMENTOS.numero.textContent = finalNum;
        palabrasSeleccionadas.push(palabraAsociada);
        iniciarAnimacionEscritura(palabraAsociada, ELEMENTOS.numero, "");

    }, 2000);
}

function iniciarAnimacionEscritura(palabra, numeroDiv) {
    const searchIcon = document.getElementById('icono');
    const contenedorTexto = document.getElementById('texto');
    const abeja = document.getElementById('abeja');
    let indice = 0;



    function escribir() {
        if (indice < palabra.length) {
            contenedorTexto.textContent += palabra.charAt(indice);


            abeja.style.left = (contenedorTexto.offsetWidth + 20) + 'px';
            abeja.style.bottom = 150 + 'px';
            ajustarTamanoTexto();
            indice++;
            setTimeout(escribir, 100);


            if (indice == 1) {
                abeja.style.opacity = '1';
            }
        } else {
            // Gira la abeja hacia la izquierda
            abeja.classList.add('girar-abeja');
            if (!numeroDiv) {
                return;
            }
            searchIcon.setAttribute('alt', 'enabled');
            const contenedorTabla = document.querySelector('[alt="contenedor_tabla"]');
            contenedorTabla.style = '';
            agregarPalabraATabla2(numeroDiv.textContent, palabra);


        }
    }

    escribir(); // Iniciar la animación
}

function ajustarTamanoTexto() {
    const contenedor = document.getElementById('contenedor');
    const texto = ELEMENTOS.texto;

    let fontSize = 7.5;
    texto.style.fontSize = fontSize + 'em';


    setTimeout(() => {
        while ((texto.scrollWidth > contenedor.clientWidth || texto.scrollHeight > contenedor.clientHeight) && fontSize > 0.5) {
            fontSize -= 0.3;
            texto.style.fontSize = fontSize + 'em';
        }
    }, 1);
}

function agregarPalabraATabla(id, palabra) {
    const tabla = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    const nuevaFila = tabla.insertRow(0);

    // Agregar ID
    let celdaId = nuevaFila.insertCell(0);
    celdaId.innerHTML = id;

    // Agregar Palabra
    let celdaPalabra = nuevaFila.insertCell(1);
    celdaPalabra.innerHTML = palabra;


}

function agregarPalabraATabla2(id, palabra) {
    const tabla = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow(0);

    // Agregar ID
    let celdaId = nuevaFila.insertCell(0);
    celdaId.innerHTML = id;

    // Agregar Palabra
    let celdaPalabra = nuevaFila.insertCell(1);
    celdaPalabra.innerHTML = palabra;

}

function selectRonda(ronda) {
    const elemento = document.getElementById('dropdownMenuButton');
    elemento.innerHTML = `<i class="fa fa-cog fa-spin fa-1x fa-fw fa-sm text-white-50"></i> ${ronda} Round`;
    var valor = `${ronda} Round`;
    elemento.setAttribute('value', valor);
    //reset estado icono
    ELEMENTOS.icono.setAttribute('alt', 'enabled');

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//view
function loadBanner() {
    fetch("views/banner.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar banner.html");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("container-body").innerHTML = html;
        })
        .catch(error => console.error("Error cargando banner:", error));
}


function loadContent(level) {
    fetch("views/baseview.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar baseview.html");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("container-body").innerHTML = html;
            refreshELEMENTOS();

            // actualizar título
            const titulo = document.getElementById("title");
            if (titulo && GRADES_MAP[level]) {
                titulo.innerHTML = `<img src="img/bee.png" width="60" height="60" alt=""> ${GRADES_MAP[level]}`;
            }

            // estado global
            window.STATE = { grade: level, name: GRADES_MAP[level] };

            const dropdownBtn = document.getElementById("dropdownMenuButton");
            if (dropdownBtn) {
                dropdownBtn.innerHTML = `<i class="fa fa-cog fa-spin fa-1x fa-fw fa-sm text-white-50"></i> Normal Round`;
                dropdownBtn.setAttribute("value", "Normal Round");
            }
            let resetbtn = document.getElementById("resetbutton");
            if (resetbtn) {
                resetbtn.setAttribute("onclick", `loadContent('${level}')`);
            }
            const icono = document.getElementById("icono");
            if (icono) {
                icono.setAttribute("onclick", `girarNumeros('${level}')`);
            }
        })
        .catch(error => console.error("Error cargando vista:", error));
}


