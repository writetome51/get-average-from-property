import { getAverageFromProperty } from './index';

// Test 1:
let players: any[] = [
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


// Test 2: make sure it can accept properties of properties.
players = [
	{stats: {strikeouts: 100}},
	{stats: {strikeouts: 20}},
	{stats: {strikeouts: 30}},
	{stats: {strikeouts: 40}},
	{stats: {strikeouts: 10}},
	{stats: {strikeouts: 15}}
];

averageStrikeouts = getAverageFromProperty('stats.strikeouts', players);
if (averageStrikeouts === 35.833333333333336) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 2A: make sure it can handle indexes as properties
let numberGroups = [
	[[1, 5], [6, 10]],
	[[11, 15], [16, 20]],
	[[21, 25], [26, 30]],
	[[31, 35], [36, 40]]
];
// get the average of [1,11,21,31]
let average = getAverageFromProperty('0.0', numberGroups);
if (average === 16) console.log('test 2A passed');
else console.log('test 2A FAILED');


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
try {
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
try {
	averageStrikeouts = getAverageFromProperty('strikeouts', players);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5:
errorTriggered = false;
players = [
	{name: 'Bill Mill', strikeouts: 100},
	{name: 'Milly Buttons', strikeouts: 12},
	{name: 'Mick Stan', strikeouts: 5},
	{name: 'Kelly Rogers', strikeouts: 2},
	{name: 'Angus Beef', strikeouts: 11},
	{name: 'Charlie Soup', strikeouts: 10},
	{name: 'Willy', strikeouts: 10}
];
try {
	averageStrikeouts = getAverageFromProperty('', players);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6:
errorTriggered = false;
try {
	averageStrikeouts = getAverageFromProperty('strikeouts', []);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
players = [];
for (let i = 0; i < 100000; ++i) {
	players.push({stats: {strikeouts: 10}});
}

// avg is 10.
averageStrikeouts = getAverageFromProperty('stats.strikeouts', players);
if (averageStrikeouts === 10) console.log('test 7 passed');
else console.log('test 7 FAILED');
