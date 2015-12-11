'use strict';

/* Mutable object */

const object = {};

object.prop = 'value';

console.log(object);


/* Immutable object */

const map = Immutable.Map();

map.set('prop', 'value');

console.log(map.toJS());

// console.log(map.set('prop', 'value').toJS());

/* Immutable library
 * http://facebook.github.io/immutable-js/docs/ */

Immutable.List();
Immutable.Map();
Immutable.Set();
// ...

let immMap = Immutable.Map();

immMap = immMap.set('map', Immutable.Map());
immMap = immMap.setIn(['map', 'name'], 'John');
immMap = immMap.updateIn(['map', 'name'], (name) => Array.from(name).reverse().join(''));

const name = immMap.getIn(['map', 'name']);

// console.log(name);
