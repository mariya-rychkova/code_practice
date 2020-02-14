let numbers = [ 23, 56, 78, 190, 8 ];

/*
  forEach array helper
*/

let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log('ForEach helper result: '+sum);

/*
  map helper
*/

let paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
function pluck(array, property) {
  let pluck = array.map((elem) => {
    return elem[property];
  });
  return pluck;
}
test = pluck(paints, 'color');
console.log('Map helper result: '+test);

/*
  filter helper
*/

let products = [
  { name: 'banana', type: 'fruit'},
  { name: 'pineapple', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'cucumber', type: 'vegetable'},
];
