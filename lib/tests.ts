import { getAverageFromProperty } from './index';

// Test 1:
let players = [
	{name: 'Bill Mill', strikeouts: 10},
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10}
];

let averageStrikeouts = getAverageFromProperty('strikeouts', players);

if (averageStrikeouts === 8.333333333333334) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:
players = [
	{name: 'Bill Mill', strikeouts: 100},
	{name: 'Milly Buttons', strikeouts: 120},
	{name: 'Mick Stan', strikeouts: 50},
	{name: 'Kelly Rogers', strikeouts: 20},
	{name: 'Angus Beef', strikeouts: 110},
	{name: 'Charlie Soup', strikeouts: 100}
];

averageStrikeouts = getAverageFromProperty('strikeouts', players);
if (averageStrikeouts === 83.33333333333333) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3:
let errorTriggered = false;

players = [
	{name: 'Bill Mill', strikeouts: '100'}, // will trigger error.
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10}
];
try{
	averageStrikeouts = getAverageFromProperty('strikeouts', players);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4:
errorTriggered = false;
players = [
	{name: 'Bill Mill', strikeouts: 100},
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10},
	{name: 'Willy'}  // will trigger error.
];
try{
	averageStrikeouts = getAverageFromProperty('strikeouts', players);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');
