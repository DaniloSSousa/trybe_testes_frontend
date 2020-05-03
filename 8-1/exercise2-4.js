const skills = ['html', 'css', 'javascript', 'node', 'react'];
const include = (s) => `Tryber ${s} aqui!
  Tudo bem?`

const includeSkills = (s) => {
  const skillsOrd = skills.sort((a, b) => a.localeCompare(b, 'br'));
  const sInclude = `${s}
    Minhas cinco principais habilidades são:
    ${skillsOrd[0]};
    ${skillsOrd[1]};
    ${skillsOrd[2]};
    ${skillsOrd[3]};
    ${skillsOrd[4]};
    #goTrybe.`;

  return sInclude;
};

console.log(includeSkills(include('Danilo')));
