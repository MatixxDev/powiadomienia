const container = document.getElementById('container');
const msgContainer = document.getElementById('msg');
const iconElement = document.querySelector('.icon i');
const msgElement = document.querySelector('.message p');
const timeContainer = document.getElementById('time_container');

// Mapa trybów do ikon
const iconClasses = {
    warning: 'fa-regular fa-brake-warning',
    error: 'fa-regular fa-circle-exclamation',
    info: 'fa-regular fa-circle-info'
};

function sendMsg(mode, msg) {
    try {
        if (iconClasses[mode] && typeof msg === "string") {
            iconElement.className = iconClasses[mode];

            msgElement.textContent = msg;
            console.log(container, iconElement, msgElement);

            $(container).fadeIn('slow');
            timeContainer.style.transform = "translateY(150%)";

            setTimeout(() => {
                $(container).fadeOut('slow', () => {
                    timeContainer.style.transform = "translateY(0%)";
                });
            }, 3000);
        } else {
            throw new Error("Źle podana wartość!");
        }
    } catch (error) {
        console.log('Błąd:', error.message);
    }
}

function Msg(mode, msg, integer) {
    if (["string", "string", "number"].every((type, i) => typeof arguments[i] === type)) {
        setTimeout(() => sendMsg(mode, msg), integer);
    } else {
        console.log("Nieprawidłowe typy argumentów!");
    }
}

Msg('warning', 'Przykładowe ostrzeżenie', 1000);
Msg('error', 'Przykładowy błąd', 5000);
Msg('info', 'Przykładowa informacja.', 10000);
