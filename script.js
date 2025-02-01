// Simulación de carga de clima
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('weather').textContent = 'Temperatura actual: 30°C, Soleado';
    }, 1000);
});

// Calculadora de Costos
function calcularCosto() {
    const numPersonas = parseInt(document.getElementById('num-personas').value);
    const incluirAlmuerzo = document.getElementById('almuerzo').checked;

    if (numPersonas < 3) {
        alert("El paquete mínimo es para 3 personas.");
        return;
    }

    let costoBase = 100000;
    if (numPersonas > 3) {
        costoBase += (numPersonas - 3) * 20000;
    }
    if (incluirAlmuerzo) {
        costoBase += numPersonas * 20000;
    }

    animateNumber(costoBase);
}

function animateNumber(finalValue) {
    const resultElement = document.getElementById('resultado-costo');
    let currentValue = 0;
    const increment = Math.ceil(finalValue / 100);

    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            clearInterval(interval);
            currentValue = finalValue;
        }
        resultElement.textContent = `Costo total: $${currentValue.toLocaleString()}`;
    }, 20);
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

