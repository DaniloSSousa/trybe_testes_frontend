let n = 5;

let ast = "";
let linha = null;
let coluna = null;
let insercao = 1;

for (linha = n; linha >= 1; linha -= 1) {   
    for (coluna = n; coluna >= 1; coluna -= 1) {
        if (coluna > insercao) {
            ast += " ";
        } else {
            ast += "*";
        }
    }

    console.log(ast);

    ast = "";

    insercao += 1;
}
