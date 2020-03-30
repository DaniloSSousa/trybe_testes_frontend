let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let outraInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

let chave;

for (chave in info) {
  if (chave === "recorrente") {
    if (info[chave] === "Sim" && outraInfo[chave] === "Sim") console.log("Ambos recorrentes");
  } else {
    console.log(info[chave] + " e " + outraInfo[chave]);
  }
}
