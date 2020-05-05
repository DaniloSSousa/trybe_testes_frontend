const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log(
  ((o, k, v) => {
    const aEntries = Object.entries(o);
    for (let i = 0; i < aEntries.length; i += 1) {
      if (aEntries[i][0] === k && aEntries[i][1] === v) return true;
    }
    return false;
  })(lesson3, 'turno', 'noite')
);
