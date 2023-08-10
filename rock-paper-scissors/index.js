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


//TODO: I'll catch up with the second half of it later :D

const predictMatch = (move, condition) => {

	let scores = {
		'Paper': {
			win: 8,
			lose: 2,
			draw: 5
		},
		'Rock': {
			win: 7,
			lose: 1,
			draw: 4
		},
		'Scissors': {
			win: 9,
			lose: 3,
			draw: 6
		},
	}

	let opponentsMoves = {
		'A': {
			losesTo: 'Paper', // 2 + 6
			winsWith: 'Scissors', // 0 + 3 
			tiesWith: 'Rock',  // 1 + 1
		},
		'B':{
			losesTo: 'Scissors',  //6 + 3
			winsWith: 'Rock',  // 0 + 1
			tiesWith: 'Paper',  // 2 + 2
		},
		'C':{
			losesTo: 'Rock', //1 + 6
			winsWith: 'Paper', // 0 + 2 
			tiesWith: 'Scissors',  // 3 + 3 
		},
		
	}

	switch(condition){
		case 'X':
			return scores[opponentsMoves[`${move}`].winsWith]['lose'];
		case 'Y':
			return scores[opponentsMoves[`${move}`].tiesWith]['draw'];
		case 'Z':
			return scores[opponentsMoves[`${move}`].losesTo]['win'];
		default:
			throw new Error('Match prediction error');
	}

}

sum = 0;

for(let i = 0; i < lines.length - 1; i++){ 
	sum += predictMatch(lines[i].split(' ').join('')[0], lines[i].split(' ').join('')[1]);
}

console.log(sum)
