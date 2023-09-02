// Variables globales para almacenar el chiste
let currentJoke = '';

// Función para obtener un chiste aleatorio desde JokeAPI
function getJoke() {
    return fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            if (data && data.joke) {
                currentJoke = data.joke;
                return currentJoke;
            } else {
                return 'No se pudo obtener un chiste.';
            }
        })
        .catch(error => {
            console.error('Error al obtener un chiste:', error);
            return 'Error al obtener un chiste.';
        });
}

// Función para mostrar el chiste en la página web
function displayJoke(joke) {
    const jokeTextElement = document.getElementById('jokeText');
    jokeTextElement.textContent = joke;
}

// Manejar el clic en el botón "Obtener Chiste"
const getJokeButton = document.getElementById('getJokeButton');
getJokeButton.addEventListener('click', () => {
    getJoke()
        .then(joke => {
            displayJoke(joke);
        });
});