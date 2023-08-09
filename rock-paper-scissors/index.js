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
	let opponentsMoves = {
		'A': {
			losesTo: ['Paper', 8],
			winsWith: ['Scissors', 3],
			tiesWith: ['Rock', 2]
		},
		'B':{
			losesTo: ['Scissors', 9],
			winsWith: ['Rock', 1],
			tiesWith: ['Paper', 4]
		},
		'C':{
			losesTo: ['Rock', 7],
			winsWith: ['Paper', 2],
			tiesWith: ['Scissors', 6]
		},
		
	}

	switch(condition){
		case 'X':
			return opponentsMoves[`${move}`].losesTo[1];
		case 'Y':
			return opponentsMoves[`${move}`].tiesWith[1];
		case 'Z':
			return opponentsMoves[`${move}`].winsWith[1];
		default:
			throw new Error('Match prediction error');
	}

}

/*
	*
	for(let i = 0; i < lines.length - 1; i++){
		let temp = lines[i].split(' ').join('');
		let [move, condition] = [temp[0], temp[1]];
		console.log(`${move} x ${condition}`)
		sum += predictMatch(move, condition);
	}
	* */


console.log(predictMatch('A', 'X'));
