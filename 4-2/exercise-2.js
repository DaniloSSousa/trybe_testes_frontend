let n = 5;

let ast = "*";
let linha = null;

for (linha = n; linha >= 1; linha -= 1) {
    console.log(ast);
    
    ast += "*";
}
