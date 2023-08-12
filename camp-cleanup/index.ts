const input = require('node:fs').readFileSync('./input', 'utf8');

const lines = input.split('\n')

const formatPairs = (pair: Array<string>) =>{
	let [a, b] = [pair[0], pair[1]];
	return {
		a: a.replace('-', ','),
		b: b.replace('-', ',')
	}
}

const pairs = lines.map((line : string) =>{
	if(!line){
		return; 
	}

	let pair = formatPairs(line.split(",")) 

	return {
		pair 
	}
})

console.log(pairs);
