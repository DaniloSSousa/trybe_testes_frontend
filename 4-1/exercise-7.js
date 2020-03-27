let nota = 100;
let porcentagem = nota / 100;

if (porcentagem >= 0 && porcentagem <= 1) {
    if (porcentagem >= 0.9) {
        console.log("A");
    } else if (porcentagem >= 0.8) {
        console.log("B");
    } else if (porcentagem >= 0.7) {
        console.log("C");
    } else if (porcentagem >= 0.6) {
        console.log("D");
    } else if (porcentagem >= 0.5) {
        console.log("E");
    } else {
        console.log("F");
    }
} else {
    console.log("Nota fora dos padrões");
    // Quit program
}
