//Each rucksack has 2 compartments
//In the input fioe, each line represents two compartments of a same rucksack
//to get the item-type, one should identify the only char that is repeated on both halves of the string

const input = require('node:fs').readFileSync('./input', 'utf8');

const lines = input.split('\n')

const getLineLength = (l : string) =>{
	return l.length; 
}

const getItemType = (compartment1 : string, compartment2: string) =>{
	let type : string; 
	let d_comp1 = [...compartment1];
	let d_comp2 = [...compartment2];



}

const getCompartments = (rucksack : string) =>{
	let l = getLineLength(rucksack);
	let middleIndex = (l - 1)/2;

	let [comp1, comp2] = [rucksack.slice(0, middleIndex - 1), rucksack.slice(middleIndex, l - 1)]
	console.log("Comp 1: ", comp1);
	console.log("Comp 2: ", comp2);
}

for (let i = 0; i < 2; i++){
	console.log(`ruck${i}: `, lines[i]);
	getCompartments(lines[i]);
}
