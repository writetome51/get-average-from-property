# getAverageFromProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects<br>): number

Returns average value of `property` found in `objects`.   
Value of `property` in each of `objects` must be type 'number', or else will error.  

Note: `property` is a string that can include dot notation  
( i.e,  `'property.subproperty.subsubproperty'` ) .  
Note:  `property` does not have to be an object key. It can also be an array index.  
If getting the value of a nested array index, here you need to use dot-notation  
and not square braces.  Example: `'1.0' instead of [1][0]`

## Examples
```js
let players = [
	{name: 'Bill Mill', strikeouts: 10},
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10}
];

getAverageFromProperty('strikeouts', players);
    // --> 8.333333333333334


players = [
	{stats: {strikeouts: 100}},
	{stats: {strikeouts: 20}},
	{stats: {strikeouts: 30}},
	{stats: {strikeouts: 40}},
	{stats: {strikeouts: 10}},
	{stats: {strikeouts: 15}}
];

getAverageFromProperty('stats.strikeouts', players);
    // --> 35.833333333333336


let numberGroups = [
	[[1, 5], [6, 10]],
	[[11, 15], [16, 20]],
	[[21, 25], [26, 30]],
	[[31, 35], [36, 40]]
];
// get the average of [1,11,21,31]
getAverageFromProperty('0.0', numberGroups);
    // --> 16


players = [
	{name: 'Bill Mill', strikeouts: '10'}, // string will trigger error.
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2}
];

averageStrikeouts = getAverageFromProperty('strikeouts', players);
// console: 'Error: the array contains a value that is not a number.'


players = [
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10},
	{name: 'Willy'}  // missing property will trigger error.
];

averageStrikeouts = getAverageFromProperty('strikeouts', players);
// console: 'Error: the array contains a value that is not a number.'
// (In this case, the value that is not a number is undefined)
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm i @writetome51/get-average-from-property
```
## Loading
```js
import {getAverageFromProperty} from '@writetome51/get-average-from-property';
```
