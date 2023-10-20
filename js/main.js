function createListItem(data) {
    return `
        <li>
            <img src="${data.image}" alt="${data.description}" />
            <p>Nombre: ${data.name}</p>
            <p>Especie: ${data.species}</p>
        </li>`;
}

async function characterRicky () {
    try { //me permite organizar y retornar una validacion en el consumo que se hace
            await axios.get('https://rickandmortyapi.com/api/character') //axios me permite consumir apis http
            .then((response) => { //me permite recibir la data exitosa

                const results = response.data.results; //encapsulo la data en una constante
                const ulCatalogo = document.getElementById('contenedor'); //llamo mi UL que tiene como ID contenedorx

                results.forEach(data => { //me permite recorrer mi arreglo que contiene diferente informacion
                    const listItemHTML = createListItem(data); //se crea una funcion para organizar la impresion de los LI
                    ulCatalogo.insertAdjacentHTML('beforeend', listItemHTML); //me permite imprimir en mi HTML el LI que tiene ya organizado la constante listItemHTML
                });
            })
            .catch((error) => { //me permite recibir un error que se haya ocasionado
                console.error('Error al obtener datos', error);
            });
        
    } catch (error) { //el catch me retorna si hubo algun problema en lo que se realiza al try
        console.error(error); //el console me imprime en consola la respuesta
    }
}

characterRicky();
