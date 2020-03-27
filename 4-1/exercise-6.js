let peca = "Rainha";

switch (peca.toLowerCase()) {
    case "peao":
        console.log("Frente");
        break;
    case "torre":
        console.log("Vertical ou horizontal");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("Movimento em L");
        break;
    case "rainha":
        console.log("Qualquer direção");
        break;
    case "rei":
        console.log("Vertical ou horizontal, uma casa");
        break;
    default:
        console.log("Não é uma peça de xadrez");
}
