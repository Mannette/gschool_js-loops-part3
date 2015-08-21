// add scripts

// console.log('sanity check!');

var students = [
  {
    name: 'Derek',
    age: 25,
    city: 'Boulder'
  },
  {
    name: 'Liz',
    age: 28,
    city: 'Denver'
  },
  {
    name: 'Carl',
    age: 31,
    city: 'Boulder'
  },
  {
    name: 'Peter',
    age: 23,
    city: 'Boulder'
  },
  {
    name: 'Megan',
    age: 19,
    city: 'Denver'
  }
];

// prints each student name to console
function firstLoop (arr) {
  arr.forEach(function (student) {
    console.log(student.name);
  });
}
firstLoop(students);

// --------- //
// PROBLEM 1 //
// --------- //
// log each student age
function ageLoop (arr) {
  arr.forEach(function (student) {
    console.log(student.age);
  });
}
// call ageLoop function
ageLoop(students);

// --------- //
// PROBLEM 2 //
// --------- //
// log only name and city of each student
function nameAndCity (arr) {
  arr.forEach(function (student) {
    console.log(student.name + ', ' + student.city);
  });
}
nameAndCity(students);

// --------- //
// PROBLEM 3 //
// --------- //
// log students from Boulder
function cityFilter (student) {
  if (student.city === 'Boulder') {
    return true;
  }
}
// set variable equal to filtered array
var filtered = students.filter(cityFilter);
// logs name and city from filtered array
function printFilteredCity (arr) {
  arr.forEach(function (student) {
    console.log(student.name + ' is from ' + student.city);
  });
}
printFilteredCity(filtered);

// --------- //
// PROBLEM 4 //
// --------- //
// log which students are older than 25
function ageFilter (student) {
  if (student.age > 25) {
    return true;
  }
}
filtered = students.filter(ageFilter);
function printFilteredAge (arr) {
  arr.forEach(function (student) {
    console.log(student.name + ' is older than 25');
  });
}
printFilteredAge(filtered);
