const alllessons = { 
  lesson1: 
    { materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã',
    },
  lesson2: 
    { materia: 'História',
      numeroEstudantes: 20,
      professor: 'Carlos',
    },
  lesson3: 
    { materia: 'Matemática',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite',
    },
};

console.log(
  (() =>
    alllessons.lesson1.numeroEstudantes +
    alllessons.lesson2.numeroEstudantes +
    alllessons.lesson3.numeroEstudantes
  )()
);
