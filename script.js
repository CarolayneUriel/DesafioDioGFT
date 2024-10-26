let nomeJogador = "Carol do video game"
let xp = 10500
let classe

if (xp <= 1000) {
   classe = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    classe = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    classe = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    classe = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    classe = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    classe = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    classe = "Imortal"
} else if (xp >= 10001) {
    classe = "Radiante"
} else {
    classe = "Você precisa de mais XPs"
}

console.log(`O Herói de nome ${nomeJogador}, está no nível de ${xp} XPs e sua classe é ${classe}.`);