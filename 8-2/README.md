PART 2
-------

For the following exercises, use the following code:

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

1 - Create a function to add the morning shift to lesson2. This function must have three parameters, namely: the object to be modified, the key to be added and its value.

2 - Create a function to list the keys of an object. This function must take an object as a parameter.

3 - Create a function to show the size of an object.

4 - Create a function to list the values of an object. This function must take an object as a parameter.

5 - Create an object named allLessons, which should group all classes through Object.assign. Each key of this new object will be a class, being these keys: lesson1, lesson2 and lesson3. When running the command console.log (allLessons), the output should be as follows:

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

6 - Using the object created in exercise 5, create a function that returns the total number of students in all classes.

7 - Create a function that obtains the key value according to its position on the object. For example:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

8 - Create a function that checks if the pair (key / value) exists in the function. This function must have three parameters, namely: the object, the key name and the key value. Example:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
