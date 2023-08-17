const input = require('node:fs').readFileSync('./input', 'utf8');

const lines = input.split('\n')

interface IntervalPair  {
	first: string[],
	second: string[]
}


const pairs = lines.map((index : string) =>{
	if(!index){
		return;
	}

	let output = index.split(',');
	let [first, second] = [output[0].split('-'), output[1].split('-')];
	return {
		first,
		second
	}
})

console.log(pairs);

//console.log(lines);
