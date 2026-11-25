const diapositivas = [
    {
        tipo: "portada",
        etiqueta: "Ingeniería de Software Verde · Evidencia Empírica",
        titulo: "¿Has considerado el consumo energético y la eficiencia de tus programas o plataformas al momento de desarrollarlos?",
        subtitulo: "Respuesta fundamentada exclusivamente en investigaciones científicas verificables y literatura académica de ingeniería de software.",
        imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        altImagen: "Circuito electrónico iluminado representando eficiencia computacional"
    },
    {
        tipo: "estudio",
        etiqueta: "Diapositiva 2 · Lenguajes de Programación",
        titulo: "Eficiencia energética según el lenguaje de programación",
        citaCorta: "Referente: Pereira et al. (2017, 2021)",
        hallazgos: [
            "Evaluaron 27 lenguajes bajo el Computer Language Benchmarks Game midiendo consumo de energía (Joules), tiempo y memoria.",
            "Lenguajes compilados como C y Rust demostraron ser los más eficientes; lenguajes interpretados como Python o Perl consumieron hasta decenas de veces más energía.",
            "Un programa más rápido no siempre es el que menos energía consume; la gestión de memoria altera el gasto eléctrico."
        ],
        imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
        altImagen: "Código fuente en pantalla de desarrollo"
    },
    {
        tipo: "estudio",
        etiqueta: "Diapositiva 3 · Ciclo de Vida del Software",
        titulo: "Modelo GREENSOFT para el software sostenible",
        citaCorta: "Referente: Naumann et al. (2011)",
        hallazgos: [
            "Propone un modelo de referencia que integra la sostenibilidad energética en todas las fases: concepción, desarrollo, distribución, uso y desactivación.",
            "Establece que las decisiones de diseño de software determinan el consumo energético directo del hardware durante toda la vida útil de la plataforma."
        ],
        imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        altImagen: "Red tecnológica global y sostenibilidad"
    },
    {
        tipo: "estudio",
        etiqueta: "Diapositiva 4 · Arquitectura y Servidores",
        titulo: "Prácticas empíricas de eficiencia energética en software",
        citaCorta: "Referente: Procaccianti et al. (2016) & Georgiou et al. (2019)",
        hallazgos: [
            "La revisión sistemática de Georgiou et al. (2019) evidencia que aplicar patrones conscientes de la energía reduce significativamente el uso de CPU y memoria.",
            "Procaccianti et al. (2016) comprobaron empíricamente que el procesamiento asíncrono y la optimización de consultas reducen el consumo energético en servidores hasta en un 25 %."
        ],
        imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
        altImagen: "Servidores y centro de datos"
    },
    {
        tipo: "estudio",
        etiqueta: "Diapositiva 5 · Estructuras de Datos",
        titulo: "Consumo energético de colecciones y estructuras en memoria",
        citaCorta: "Referente: Hasan et al. (2016)",
        hallazgos: [
            "El estudio midió el impacto energético de distintas implementaciones de listas, mapas y conjuntos en Java bajo operaciones de inserción, búsqueda e iteración.",
            "Seleccionar la estructura de datos adecuada según el patrón de acceso genera ahorros energéticos superiores al 30 % en operaciones intensivas en memoria."
        ],
        imagen: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
        altImagen: "Análisis de algoritmos y estructuras de datos"
    },
    {
        tipo: "bibliografia",
        etiqueta: "Diapositiva 6 · Soporte Académico",
        titulo: "Referencias Bibliográficas Reales (Formato APA 7.ª ed.)",
        referenciasAPA: [
            {
                texto: "Georgiou, S., Rizou, S., & Spinellis, D. (2019). Software development lifecycle for energy efficiency: Techniques and tools. ACM Computing Surveys, 52(4), 1–33.",
                doi: "https://doi.org/10.1145/3337773"
            },
            {
                texto: "Hasan, S., King, Z., Hafiz, M., Sayagh, M., Adams, B., & Hindle, A. (2016). Energy profiles of Java collections classes. En Proceedings of the 38th International Conference on Software Engineering (ICSE '16) (pp. 225–236). ACM.",
                doi: "https://doi.org/10.1145/2884781.2884869"
            },
            {
                texto: "Naumann, S., Dick, M., Kern, E., & Johann, T. (2011). The GREENSOFT Model: A reference model for green and sustainable software and its engineering. Sustainable Computing: Informatics and Systems, 1(4), 294–304.",
                doi: "https://doi.org/10.1016/j.suscom.2011.06.004"
            },
            {
                texto: "Pereira, R., Couto, M., Ribeiro, F., Rua, R., Cunha, J., Fernandes, J. P., & Saraiva, J. (2017). Energy efficiency across programming languages: How do energy, time, and memory relate? En Proceedings of the 10th ACM SIGPLAN International Conference on Software Language Engineering (SLE 2017) (pp. 256–267). ACM.",
                doi: "https://doi.org/10.1145/3136014.3136031"
            },
            {
                texto: "Pereira, R., Couto, M., Ribeiro, F., Rua, R., Cunha, J., Fernandes, J. P., & Saraiva, J. (2021). Ranking programming languages by energy efficiency. Science of Computer Programming, 205, 102609.",
                doi: "https://doi.org/10.1016/j.scico.2021.102609"
            },
            {
                texto: "Procaccianti, G., Fernández, H., & Lago, P. (2016). Empirical evaluation of two best practices for energy-efficient software development. Journal of Systems and Software, 117, 185–198.",
                doi: "https://doi.org/10.1016/j.jss.2016.02.035"
            }
        ]
    }
];

let indiceActual = 0;

const visor = document.getElementById("visor-diapositiva");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const contador = document.getElementById("contador-diapositivas");
const barraProgreso = document.getElementById("barra-progreso");
const indicadorPuntos = document.getElementById("indicador-puntos");

function renderizarPuntos() {
    indicadorPuntos.innerHTML = "";
    diapositivas.forEach((_, i) => {
        const punto = document.createElement("button");
        punto.className = `punto ${i === indiceActual ? "activo" : ""}`;
        punto.setAttribute("aria-label", `Ir a diapositiva ${i + 1}`);
        punto.addEventListener("click", () => {
            indiceActual = i;
            renderizarDiapositiva();
        });
        indicadorPuntos.appendChild(punto);
    });
}

function renderizarDiapositiva() {
    const actual = diapositivas[indiceActual];
    visor.style.animation = "none";
    visor.offsetHeight;
    visor.style.animation = "";

    if (actual.tipo === "portada") {
        visor.innerHTML = `
            <div class="grid-diapositiva">
                <div class="contenido-texto">
                    <span class="etiqueta">${actual.etiqueta}</span>
                    <h1>${actual.titulo}</h1>
                    <p class="subtitulo">${actual.subtitulo}</p>
                </div>
                <div class="contenedor-imagen">
                    <img src="${actual.imagen}" alt="${actual.altImagen}">
                </div>
            </div>
        `;
    } else if (actual.tipo === "estudio") {
        const items = actual.hallazgos.map(h => `<li>${h}</li>`).join("");
        visor.innerHTML = `
            <div class="grid-diapositiva">
                <div class="contenido-texto">
                    <span class="etiqueta">${actual.etiqueta}</span>
                    <h2>${actual.titulo}</h2>
                    <p class="cita-corta">${actual.citaCorta}</p>
                    <ul class="lista-hallazgos">${items}</ul>
                </div>
                <div class="contenedor-imagen">
                    <img src="${actual.imagen}" alt="${actual.altImagen}">
                </div>
            </div>
        `;
    } else if (actual.tipo === "bibliografia") {
        const refs = actual.referenciasAPA
            .map(r => `<li>${r.texto} <a href="${r.doi}" target="_blank" rel="noopener noreferrer">${r.doi}</a></li>`)
            .join("");
        visor.innerHTML = `
            <div class="diapositiva-completa">
                <span class="etiqueta">${actual.etiqueta}</span>
                <h2>${actual.titulo}</h2>
                <ol class="lista-apa">${refs}</ol>
            </div>
        `;
    }

    contador.textContent = `${indiceActual + 1} / ${diapositivas.length}`;
    barraProgreso.style.width = `${((indiceActual + 1) / diapositivas.length) * 100}%`;
    btnAnterior.disabled = indiceActual === 0;
    btnSiguiente.disabled = indiceActual === diapositivas.length - 1;
    renderizarPuntos();
}

btnAnterior.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        renderizarDiapositiva();
    }
});

btnSiguiente.addEventListener("click", () => {
    if (indiceActual < diapositivas.length - 1) {
        indiceActual++;
        renderizarDiapositiva();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && indiceActual < diapositivas.length - 1) {
        indiceActual++;
        renderizarDiapositiva();
    } else if (e.key === "ArrowLeft" && indiceActual > 0) {
        indiceActual--;
        renderizarDiapositiva();
    }
});

renderizarDiapositiva();