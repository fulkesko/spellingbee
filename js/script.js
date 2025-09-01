const DICCIONARIO = {
    "High": {
        "Normal Round": [
            "Accommodation", "Advertisements", "Amazement", "Appreciation", "Appropriation",
            "Arctic", "Assessing", "Assignment", "Attempt", "Audience",
            "Awareness", "Backlash", "Backstage", "Baggage", "Biography",
            "Brainstorm", "Breathtaking", "Campaign", "Carriage", "Celebration",
            "Centimetre", "Chandelier", "Characters", "Clothing", "Commemorate",
            "Composers", "Customs", "Disappear", "Disappearance", "Environment",
            "Equivalent", "Fashion", "Festival", "Follower", "Garment",
            "Grasshopper", "Graveyard", "Headline", "Heritage", "Influence",
            "Labour", "Landfill", "Launched", "Malware", "Manipulate",
            "Measure", "Misfortune", "Misinformation", "Musical", "Mysterious",
            "Newspaper", "Overcome", "Overtime", "Overwhelming", "Passage",
            "Performance", "Persuade", "Pharmacist", "Phishing", "Pickpocket",
            "Platform", "Population", "Privacy", "Prosperous", "Relative",
            "Report", "Restoration", "Review", "Seized", "Settlement",
            "Shipping", "Shutdown", "Shutters", "Skyscraper", "Slogans",
            "Speckled", "Struggle", "Surround", "Sustainability", "Sustainable",
            "Themselves", "Threatened", "Triumph", "Troublesome", "Underground",
            "Upcycle", "Volunteer", "Voyage", "Whisper", "Witnesses"
        ],
        "Extra Round": [
            "Adventure", "Animated", "Animator", "Award", "Background",
            "Benefits", "Entertainment", "Enthusiastic", "Famous", "Filmmaker",
            "Initiatives", "Impressive", "Paragraph", "Recommend", "Recycling",
            "Resolution", "Setting", "Soundtrack", "Ancient", "Builders",
            "Culprit", "Distraction", "Exceptional", "Friendship", "Guilty",
            "Harmony", "Inseparable", "Jealous", "Knight", "Library",
            "Metropolitan", "Neighbourhood", "Obedient", "Pickpocket", "Qualificate",
            "Research", "Suspect", "Thief", "Urgently", "Victorious",
            "Worldwide", "Xylophone", "Yield", "Zeppelin"
        ]
    }, "Secondary": {
        "Normal Round": [
            "Acrobat", "Airplane", "Animal", "Arcade", "Astronaut",
            "Aunt", "Australian", "Ballerina", "Beautiful", "Blonde",
            "Bookstore", "British", "Brother", "Brown", "Carpenter",
            "Cartoon", "Cheese", "Children", "Chilean", "Circus",
            "Clown", "Comedy", "Condor", "Costume", "Curly",
            "Director", "Documentary", "Drama", "Ear", "Elephant",
            "French", "Friendly", "German", "Glasses", "Guitar",
            "Harmonica", "Hero", "Horror", "Juggler", "Keys",
            "Mexican", "Microphone", "Monkey", "Mother", "Mouse",
            "Parade", "Parents", "Scene", "Script", "Sharks",
            "Small", "Square", "Strawberries", "Subway", "Talented",
            "Taxi", "Thumb", "Tickets", "Tiger", "Tightrope",
            "Tooth", "Tooth", "Uncle", "Vegetarian", "Violín",
            "Walker", "Watch", "Western", "World", "Writer"
        ],
        "Extra Round": [
            "Astronomer", "Brown", "Cardigan", "Crater", "Dress",
            "Eye", "Finger", "Glasses", "Hoodie", "Jupiter",
            "Meteor", "Mouth", "Square", "Straight", "Sweatshirt",
            "Tights", "Universe", "Wavy"
        ]
    }, "Primary": {
        "Normal Round": [
            "Grandma", "Brother", "Listen", "Touch", "Legs",
            "Eyes", "Firefighter", "Nurse", "Sloth", "Small",
            "History", "English", "Bookstore", "Next", "Hospital",
            "Friday", "Saturday", "Name", "Walk", "Count",
            "Short", "Slow", "Pool", "Lake", "Twenty",
            "Parents", "Forty", "Uncle", "March", "Date",
            "Calendar", "Noon", "Eat", "Early", "Lunch",
            "Soccer", "Golf", "Tennis", "Football", "Walk",
            "Running", "Picnic", "Playing", "Shorts", "Sleep",
            "Jeans", "Swim", "Sneakers", "Hat", "Gloves",
            "Boots", "Scarf", "Comb", "Soap", "Shampoo",
            "Toothbrush", "Clinic", "Clarinet", "Cymbals", "Piano",
            "Camel", "Ostrich", "Wing", "Desert", "Shoulder",
            "Ankle", "Cold", "Fever", "Necklace", "Drumsticks",
            "Wallet", "Keyboard", "Subway", "Bookstore", "Helicopter",
            "Arcade", "Scientist", "Tickets", "Writer", "Costumes",
            "Aquarium", "Famous", "Elevator", "Concert", "Strong",
            "Quiet", "Weak", "Noisy", "Interesting", "Talented"

        ],
        "Extra Round": [
            "Colorful", "Amazing", "Ringmaster", "Clown", "Unicyclist",
            "Juggler", "Cameraman", "Actors", "Script", "Producer",
            "Cardigan", "Astronaut", "Clothes", "Tights", "Comedy",
            "Grumpy", "Western", "Silly", "Saturn", "Farthest",
            "Earth", "Nearest", "Smartwatch", "Expensive", "Powerful",
            "Camera"
        ]
    }

};

const ELEMENTOS = {
    texto: document.getElementById('texto'),
    numero: document.getElementById('numero'),
    dropdownMenuButton: document.getElementById('dropdownMenuButton'),
    icono: document.getElementById('icono')
};



// Puedes seguir aplicando el tamaño de fuente que quieras para otros elementos
ELEMENTOS.numero.style.fontSize = '2.9em';


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

    const DIFICULTAD = {
        'First Round': 'Easy', 'Second Round': 'Medium', 'Third Round': 'Hard'
    }[valorElemento];

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

        if (["Secondary", "Primary","High"].includes(grade)) {
            iniciarAnimacionEscritura(palabraAsociada, ELEMENTOS.numero, "");
        } 
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