// Cargar la base de datos desde el archivo JSON
let peliculas = [];

// Función para cargar el JSON
async function cargarPeliculas() {
    try {
        const response = await fetch('peliculas.json');
        if (!response.ok) {
            throw new Error('Error al cargar la base de datos');
        }
        peliculas = await response.json();
        console.log(' Películas cargadas:', peliculas.length);
    } catch (error) {
        console.error(' Error:', error);
        // Datos de respaldo en caso de error
        peliculas = [
    {
        "titulo": "The Godfather",
        "genero": "Drama",
        "edad_minima": 18,
        "descripcion": "Un clásico del drama criminal sobre la familia Corleone."
    },
    {
        "titulo": "The Shawshank Redemption",
        "genero": "Drama",
        "edad_minima": 16,
        "descripcion": "Dos hombres encarcelados forjan una amistad a lo largo de los años."
    },
    {
        "titulo": "Forrest Gump",
        "genero": "Drama",
        "edad_minima": 12,
        "descripcion": "La vida de un hombre con un coeficiente intelectual bajo pero un corazón enorme."
    },
    {
        "titulo": "The Green Mile",
        "genero": "Drama",
        "edad_minima": 16,
        "descripcion": "Un guardia de prisión descubre los dones milagrosos de un preso condenado a muerte."
    },
    {
        "titulo": "A Beautiful Mind",
        "genero": "Drama",
        "edad_minima": 13,
        "descripcion": "La historia del genio matemático John Nash y su lucha contra la esquizofrenia."
    },
    {
        "titulo": "The Pursuit of Happyness",
        "genero": "Drama",
        "edad_minima": 12,
        "descripcion": "Un padre lucha contra la adversidad para darle un futuro mejor a su hijo."
    },
    {
        "titulo": "Dead Poets Society",
        "genero": "Drama",
        "edad_minima": 13,
        "descripcion": "Un profesor inspira a sus estudiantes a través de la poesía."
    },
    {
        "titulo": "The Social Network",
        "genero": "Drama",
        "edad_minima": 14,
        "descripcion": "La historia detrás de la creación de Facebook."
    },
    {
        "titulo": "Superbad",
        "genero": "Comedia",
        "edad_minima": 16,
        "descripcion": "Dos adolescentes en una aventura loca antes de la graduación."
    },
    {
        "titulo": "The Hangover",
        "genero": "Comedia",
        "edad_minima": 18,
        "descripcion": "Tres amigos despiertan después de una despedida de soltero en Las Vegas sin recordar nada."
    },
    {
        "titulo": "Step Brothers",
        "genero": "Comedia",
        "edad_minima": 15,
        "descripcion": "Dos cuarentones que viven con sus padres se convierten en hermanastros."
    },
    {
        "titulo": "Bridesmaids",
        "genero": "Comedia",
        "edad_minima": 16,
        "descripcion": "Una mujer enfrenta el caos de ser dama de honor en la boda de su mejor amiga."
    },
    {
        "titulo": "The 40-Year-Old Virgin",
        "genero": "Comedia",
        "edad_minima": 17,
        "descripcion": "Un empleado de 40 años intenta perder su virginidad."
    },
    {
        "titulo": "Mean Girls",
        "genero": "Comedia",
        "edad_minima": 13,
        "descripcion": "Una chica nueva en la escuela navega por el mundo de las chicas populares."
    },
    {
        "titulo": "Anchorman",
        "genero": "Comedia",
        "edad_minima": 14,
        "descripcion": "Las aventuras de un famoso presentador de noticias en los años 70."
    },
    {
        "titulo": "Zoolander",
        "genero": "Comedia",
        "edad_minima": 13,
        "descripcion": "Un modelo tonto es reclutado para asesinar a un político."
    },
    {
        "titulo": "Mamma Mia!",
        "genero": "Musical",
        "edad_minima": 12,
        "descripcion": "Una divertida historia con las canciones de ABBA."
    },
    {
        "titulo": "La La Land",
        "genero": "Musical",
        "edad_minima": 14,
        "descripcion": "Un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños."
    },
    {
        "titulo": "The Greatest Showman",
        "genero": "Musical",
        "edad_minima": 10,
        "descripcion": "La historia de P.T. Barnum y la creación del circo moderno."
    },
    {
        "titulo": "Les Misérables",
        "genero": "Musical",
        "edad_minima": 14,
        "descripcion": "La épica adaptación del musical basado en la novela de Victor Hugo."
    },
    {
        "titulo": "Chicago",
        "genero": "Musical",
        "edad_minima": 16,
        "descripcion": "Dos asesinas compiten por la atención de los medios en los años 20."
    },
    {
        "titulo": "Hairspray",
        "genero": "Musical",
        "edad_minima": 11,
        "descripcion": "Una chica con sobrepeso sueña con bailar en un programa de televisión."
    },
    {
        "titulo": "The Sound of Music",
        "genero": "Musical",
        "edad_minima": 8,
        "descripcion": "Una novicia se convierte en niñera de una familia numerosa en Austria."
    },
    {
        "titulo": "Pulp Fiction",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "Historias entrelazadas en el mundo criminal de Quentin Tarantino."
    },
    {
        "titulo": "The Dark Knight",
        "genero": "Crimen",
        "edad_minima": 16,
        "descripcion": "Batman enfrenta a su mayor enemigo: el Joker."
    },
    {
        "titulo": "Goodfellas",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "La historia de un mafioso desde su infancia hasta su caída."
    },
    {
        "titulo": "Reservoir Dogs",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "Un grupo de criminales se enfrenta después de un fallido golpe."
    },
    {
        "titulo": "The Departed",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "Un infiltrado y un policía encubierto se enfrentan en el mundo del crimen organizado."
    },
    {
        "titulo": "Training Day",
        "genero": "Crimen",
        "edad_minima": 17,
        "descripcion": "Un policía novato descubre la corrupción durante su primer día de trabajo."
    },
    {
        "titulo": "American Gangster",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "La historia real del narcotraficante Frank Lucas."
    },
    {
        "titulo": "The Usual Suspects",
        "genero": "Crimen",
        "edad_minima": 16,
        "descripcion": "Un misterioso criminal une a un grupo de delincuentes para un gran golpe."
    },
    {
        "titulo": "A Clockwork Orange",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "Un joven violento es sometido a un experimento psicológico."
    },
    {
        "titulo": "Inception",
        "genero": "Drama",
        "edad_minima": 14,
        "descripcion": "Un ladrón que roba secretos de los sueños recibe una misión imposible."
    },
    {
        "titulo": "The Wolf of Wall Street",
        "genero": "Crimen",
        "edad_minima": 18,
        "descripcion": "La historia real del corredor de bolsa Jordan Belfort."
    },
    {
        "titulo": "Catch Me If You Can",
        "genero": "Drama",
        "edad_minima": 13,
        "descripcion": "Un joven estafador es perseguido por un agente del FBI."
    },
    {
        "titulo": "The Big Short",
        "genero": "Drama",
        "edad_minima": 15,
        "descripcion": "Un grupo de inversores predice la crisis financiera de 2008."
    },
    {
        "titulo": "Moneyball",
        "genero": "Drama",
        "edad_minima": 12,
        "descripcion": "Un gerente de béisbol usa estadísticas para construir un equipo ganador."
    },
    {
        "titulo": "The Blind Side",
        "genero": "Drama",
        "edad_minima": 11,
        "descripcion": "La historia real de un joven sin hogar que se convierte en estrella del fútbol americano."
    },
    {
        "titulo": "21 Jump Street",
        "genero": "Comedia",
        "edad_minima": 16,
        "descripcion": "Dos policías se infiltran en una escuela secundaria."
    },
    {
        "titulo": "Neighbors",
        "genero": "Comedia",
        "edad_minima": 17,
        "descripcion": "Una pareja con un bebé lucha contra una fraternidad ruidosa."
    },
    {
        "titulo": "Ted",
        "genero": "Comedia",
        "edad_minima": 18,
        "descripcion": "Un hombre y su oso de peluche viviente enfrentan la vida adulta."
    },
    {
        "titulo": "The Interview",
        "genero": "Comedia",
        "edad_minima": 17,
        "descripcion": "Dos periodistas son reclutados para asesinar a un dictador."
    },
    {
        "titulo": "This Is the End",
        "genero": "Comedia",
        "edad_minima": 18,
        "descripcion": "Celebridades sobreviven al apocalipsis en la casa de James Franco."
    },
    {
        "titulo": "Into the Woods",
        "genero": "Musical",
        "edad_minima": 10,
        "descripcion": "Cuentos de hadas se entrelazan en esta aventura musical."
    },
    {
        "titulo": "Dreamgirls",
        "genero": "Musical",
        "edad_minima": 13,
        "descripcion": "Un grupo de chicas lucha por el éxito en la industria musical."
    },
    {
        "titulo": "An American in Paris",
        "genero": "Musical",
        "edad_minima": 8,
        "descripcion": "Un pintor estadounidense se enamora de una mujer en París."
    },
    {
        "titulo": "Singin' in the Rain",
        "genero": "Musical",
        "edad_minima": 6,
        "descripcion": "Una estrella del cine mudo se adapta al sonido en la década de 1920."
    },
    {
        "titulo": "Ocean's Eleven",
        "genero": "Crimen",
        "edad_minima": 14,
        "descripcion": "Un grupo de ladrones planea el mayor robo de la historia en Las Vegas."
    }
     ];
    }
}

// Variables de estado
let generoSeleccionado = null;

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar películas
    await cargarPeliculas();
    
    // Obtener elementos
    const edadInput = document.getElementById('edad');
    const generoBtns = document.querySelectorAll('.genero-btn');
    const recomendarBtn = document.getElementById('recomendar-btn');
    const recomendacionDiv = document.getElementById('recomendacion');

    // Event listener para botones de género
    generoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover selección anterior
            generoBtns.forEach(b => b.classList.remove('seleccionado'));
            // Agregar selección al actual
            this.classList.add('seleccionado');
            generoSeleccionado = this.dataset.genero;
            
            // Mostrar feedback visual
            recomendacionDiv.textContent = `Género seleccionado: ${generoSeleccionado}`;
            recomendacionDiv.style.color = '#7f8c8d';
        });
    });

    // Event listener para el botón recomendar
    recomendarBtn.addEventListener('click', function() {
        // Validaciones
        const edad = parseInt(edadInput.value);
        
        if (isNaN(edad) || edad < 1 || edad > 120) {
            recomendacionDiv.textContent = ' Por favor, ingresa una edad válida (1-120)';
            recomendacionDiv.style.color = '#e74c3c';
            return;
        }
        
        if (!generoSeleccionado) {
            recomendacionDiv.textContent = ' Por favor, selecciona un género primero';
            recomendacionDiv.style.color = '#e74c3c';
            return;
        }

        // Buscar película recomendada
        const peliculaRecomendada = recomendarPelicula(edad, generoSeleccionado);
        
        if (peliculaRecomendada) {
            recomendacionDiv.innerHTML = `
                <strong> ${peliculaRecomendada.titulo}</strong><br>
                <span style="font-size: 0.8em; color: #7f8c8d;">${peliculaRecomendada.descripcion}</span>
            `;
            recomendacionDiv.style.color = '#2c3e50';
        } else {
            recomendacionDiv.textContent = ' No encontramos una película para ese género y edad. ¡Prueba con otro género!';
            recomendacionDiv.style.color = '#e67e22';
        }
    });
});

// Función principal de recomendación
function recomendarPelicula(edad, genero) {
    // Filtrar películas por género y edad mínima
    const opciones = peliculas.filter(p => 
        p.genero === genero && 
        edad >= p.edad_minima
    );
    
    if (opciones.length === 0) {
        return null;
    }
    
    // Seleccionar una película aleatoria
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

// Función para forzar recarga de datos (útil para pruebas)
window.recargarDatos = async function() {
    await cargarPeliculas();
    console.log(' Datos recargados');
};