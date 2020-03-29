let n = 5;

let ast = "*";
let esp = " ";
let linha = null;
let insercao = null;
let linImp = null; 

   
if ((n % 2) !== 0 && n >= 3) {
    for (linha = 1, insercao = n; linha <= n; linha += 2, insercao -= 2) {
        linImp = esp.repeat(insercao / 2) + ast.repeat(linha);
        
        console.log(linImp.padEnd(n, esp));
    }
} else {
    console.log("Não é um número ímpar igual ou maior que 3");
}
