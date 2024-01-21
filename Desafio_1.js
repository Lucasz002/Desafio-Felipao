// Variable to store a hero's name and amount of experience (XP)
let nome = "Raze";
let XP = 8352;

// Decision structure to display one of the messages below
let level;
if (XP < 1000) {
    level = "Ferro";
} else if (XP <= 2000) {
    level = "Bronze";
} else if (XP <= 5000) {
    level = "Prata";
} else if (XP <= 7000) {
    level = "Ouro";
} else if (XP <= 8000) {
    level = "Platina";
} else if (XP <= 9000) {
    level = "Ascendente";
} else if (XP <= 10000) {
    level = "Imortal";
} else {
    level = "Radiante";
}

// Exit message
console.log("O herói de nome " + nome + " está no nível de " + level);