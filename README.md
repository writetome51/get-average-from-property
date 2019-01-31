# getAverageFromProperty()
## getAverageFromProperty(property, objects): number

Returns average value of property found in objects.  
Value of object property must be type 'number' and must be a finite number,  
or else will error.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/get-average-from-property
```
## Loading
```
// If using TypeScript:
import {getAverageFromProperty} from '@writetome51/get-average-from-property';
// If using ES5 JavaScript:
var getAverageFromProperty = 
	require('@writetome51/get-average-from-property').getAverageFromProperty;
```
## Examples
```
let players = [
	{name: 'Bill Mill', strikeouts: 10},
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10}
];

let averageStrikeouts = getAverageFromProperty('strikeouts', players);
// averageStrikeouts === 8.333333333333334

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