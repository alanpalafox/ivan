document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const pirateName = document.getElementById('pirate-name');
    const pirateDescription = document.getElementById('pirate-description');
    const pirateImage = document.getElementById('pirate-image');

    const pirates = {
        jackSparrow: {
            name: 'Capitán Jack Sparrow',
            description: 'Eres astuto, impredecible y siempre encuentras una salida, incluso cuando parece imposible. La libertad y la aventura son tu brújula, y tu encanto es tan potente como tu habilidad para meterte en problemas (y salir de ellos).',
            image: 'images/Capitán Jack Sparrow.jpg' // Ejemplo de imagen
        },
        barbossa: {
            name: 'Capitán Hector Barbossa',
            description: 'Eres un estratega formidable, con un ingenio agudo y una voluntad inquebrantable. Buscas el poder y la autoridad, y no temes tomar decisiones difíciles. La lealtad, aunque a veces retorcida, es importante para ti.',
            image: 'images/Capitán Hector Barbossa.jpg' // Ejemplo de imagen
        },
        elizabethSwann: {
            name: 'Elizabeth Swann (Reina Pirata)',
            description: 'Eres valiente, decidida y no te dejas intimidar por nada ni nadie. Tienes un fuerte sentido de la justicia y la libertad, y estás dispuesta a luchar por lo que crees. Tu liderazgo es natural y tu espíritu indomable.',
            image: 'images/Elizabeth Swann (Reina Pirata).jpeg' // Ejemplo de imagen
        },
        willTurner: {
            name: 'Will Turner',
            description: 'Eres noble, leal y con un fuerte sentido del deber. Aunque a veces te ves envuelto en situaciones complicadas, tu corazón es puro y siempre buscas proteger a quienes amas. Eres un guerrero formidable cuando la situación lo requiere.',
            image: 'images/Will Turner.jpg' // Ejemplo de imagen
        }
    };

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

        const answers = {
            q1: quizForm.elements.q1.value,
            q2: quizForm.elements.q2.value,
            q3: quizForm.elements.q3.value,
            q4: quizForm.elements.q4.value
        };

        let score = {
            jackSparrow: 0,
            barbossa: 0,
            elizabethSwann: 0,
            willTurner: 0
        };

        // Lógica para puntuar las respuestas
        // Pregunta 1: Tesoro
        if (answers.q1 === 'libertad') score.jackSparrow += 2;
        if (answers.q1 === 'oro') score.barbossa += 2;
        if (answers.q1 === 'conocimiento') score.elizabethSwann += 1;
        if (answers.q1 === 'amistad') score.willTurner += 2;

        // Pregunta 2: Resolver problemas
        if (answers.q2 === 'engaño') score.jackSparrow += 2;
        if (answers.q2 === 'fuerza') score.barbossa += 2;
        if (answers.q2 === 'negociacion') score.elizabethSwann += 2;
        if (answers.q2 === 'planes') score.willTurner += 1; // Will puede ser más directo, pero también piensa

        // Pregunta 3: Mapa del tesoro
        if (answers.q3 === 'buscar') score.jackSparrow += 2;
        if (answers.q3 === 'compartir') score.willTurner += 2;
        if (answers.q3 === 'vender') score.barbossa += 1; // Barbossa podría considerarlo
        if (answers.q3 === 'estudiar') score.elizabethSwann += 2;

        // Pregunta 4: Bebida favorita
        if (answers.q4 === 'ron') score.jackSparrow += 2;
        if (answers.q4 === 'agua') score.willTurner += 1;
        if (answers.q4 === 'vino') score.elizabethSwann += 1;
        if (answers.q4 === 'cerveza') score.barbossa += 1;

        let strongestPirate = '';
        let maxScore = -1;

        for (const pirate in score) {
            if (score[pirate] > maxScore) {
                maxScore = score[pirate];
                strongestPirate = pirate;
            }
        }

        // Si hay un empate, puedes añadir lógica para desempatar o elegir uno por defecto
        // Por ahora, simplemente elegirá el primero que encuentre con la puntuación máxima.

        const chosenPirate = pirates[strongestPirate];

        pirateName.textContent = chosenPirate.name;
        pirateDescription.textContent = chosenPirate.description;
        pirateImage.src = chosenPirate.image;
        pirateImage.alt = `Imagen de ${chosenPirate.name}`;
        pirateImage.classList.remove('hidden');
        resultDiv.classList.remove('hidden');

        // Desplazar la vista al resultado
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
});