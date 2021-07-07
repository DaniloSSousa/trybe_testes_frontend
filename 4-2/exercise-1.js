let n = 5;

let ast = "";
let linha = null;
let coluna = null;

for (linha = n; linha >= 1; linha -= 1) {
    for (coluna = n; coluna >= 1; coluna -= 1) {               
        ast += "*";
    }
    
    console.log(ast);

    ast = "";
}
