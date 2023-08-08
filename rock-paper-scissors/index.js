const input = require("node:fs").readFileSync("./input", "utf8");

const lines = input.split("\n");

const matchParser = {
	'AY': 8,
	'AX': 4,
	'AZ': 3,
	'BY': 5,
	'BX': 1,
	'BZ': 9,
	'CY': 2,
	'CX': 7,
	'CZ': 6
}

let sum = 0;

for(let i = 0; i < lines.length - 1; i++){
	sum += matchParser[lines[i].split(' ').join('')];
}

console.log(sum);

const predictiveParser = {
	'AY': 8,
	'AX': 4,
	'AZ': 3,
	'BY': 5,
	'BX': 1,
	'BZ': 9,
	'CY': 2,
	'CX': 7,
	'CZ': 6
}

//TODO: I'll catch up with the second half of it later :D
