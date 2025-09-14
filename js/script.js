const button = document.getElementById("colorButton");
const memberName = document.getElementById("member-name");
const memberImg = document.getElementById("member-img");
const memberDesc = document.getElementById("member-desc");

const colorPalettes = [
  {
    name: "Classic Light",
    "--primary-color": "#007BFF",
    "--secondary-color": "#6c757d",
    "--background-color": "#f5f5f5",
    "--card-bg": "#fff",
    "--text-color": "#343a40",
    "--heading-color": "#1a202c",
    "--shadow-light": "rgba(0, 0, 0, 0.1)",
  },
  {
    name: "Ocean Blue",
    "--primary-color": "#007acc",
    "--secondary-color": "#668c99",
    "--background-color": "#e6f0ff",
    "--card-bg": "#ffffff",
    "--text-color": "#2b2b2b",
    "--heading-color": "#1c2b4d",
    "--shadow-light": "rgba(0, 0, 0, 0.1)",
  },
  {
    name: "Dark Mode",
    "--primary-color": "#4299e1",
    "--secondary-color": "#a0aec0",
    "--background-color": "#1a202c",
    "--card-bg": "#2d3748",
    "--text-color": "#e2e8f0",
    "--heading-color": "#fff",
    "--shadow-light": "rgba(0, 0, 0, 0.4)",
  },
  {
    name: "Autumn Gold",
    "--primary-color": "#d28b1f",
    "--secondary-color": "#b88a55",
    "--background-color": "#fcf8e3",
    "--card-bg": "#fffaf0",
    "--text-color": "#333333",
    "--heading-color": "#5a452a",
    "--shadow-light": "rgba(0, 0, 0, 0.08)",
  },
  {
    name: "Soft Lilac",
    "--primary-color": "#9a60c0",
    "--secondary-color": "#b19cd9",
    "--background-color": "#f2ecfa",
    "--card-bg": "#ffffff",
    "--text-color": "#2c3e50",
    "--heading-color": "#3a4d69",
    "--shadow-light": "rgba(0, 0, 0, 0.1)",
  },
];
let index = 0;
let memberIndex = 1;

function applyPalette() {
    index = (index + 1) % colorPalettes.length;
    const selectedPalette = colorPalettes[index];
    const rootElement = document.documentElement;

    for (const variable in selectedPalette) {
        if (variable.startsWith('--')) {
        rootElement.style.setProperty(variable, selectedPalette[variable]);
        }
    }
}

button.addEventListener("click", () => applyPalette());

const members = [
    {name:"Jesús Alejandro Elguera Tovar", photo:"imgs/ulises.jpg", desc:"Americanista de primera."},
    {name:"Luis Angel Quijano Guerrero", photo:"imgs/quijano.jpg", desc:"Fanático de la redonda."}
]

document.addEventListener('DOMContentLoaded', () => {
    memberName.textContent = members[0].name;
    memberImg.src = members[0].photo;
    memberDesc.textContent = members[0].desc;
    getTime();
});

document.getElementById("nextParticipant").addEventListener("click", function(){
    const memberCard = document.getElementById("member-card");
    memberCard.classList.add("fade-out");

    setTimeout(() => {
        memberName.textContent = members[memberIndex].name;
        memberImg.src = members[memberIndex].photo;
        memberDesc.textContent = members[memberIndex].desc;
        memberIndex = (memberIndex + 1) % members.length;
        memberCard.classList.remove("fade-out");
    }, 500);
});

document.getElementById("fontSizeButton").addEventListener("click", function() {
    document.body.classList.toggle("large-font");
});

function getTime(){
    actualDate = new Date()
    hour = actualDate.getHours()
    min = actualDate.getMinutes()
    seconds = actualDate.getSeconds()

    var time = hour + " : " + min + " : " + seconds

    document.form_reloj.reloj.value = time;
    setTimeout(getTime, 1000)
}