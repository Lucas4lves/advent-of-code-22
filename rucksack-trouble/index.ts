//Each rucksack has 2 compartments
//In the input fioe, each line represents two compartments of a same rucksack
//to get the item-type, one should identify the only char that is repeated on both halves of the string

const input = require('node:fs').readFileSync('./input', 'utf8');

const lines = input.split('\n')

const getLineLength = (l : string) =>{
	return l.length; 
}

const toArray = (str: string) : Array<string> =>{
	let temp = new Array(str.length);
	for(let i = 0; i < str.length; i++)
	{
		temp[i] = str[i];	
	}

	return temp;
}

const getItemType = (compartment1 : string, compartment2: string) =>{
	let matches = 0;
	for(let k = 0; k < compartment1.length; k++){
		for (let m = 0; m < compartment2.length; m++){
			if(compartment1[k].charCodeAt(0) === compartment2[m].charCodeAt(0)){		
					return compartment1[k];
				}
		}
	}
	

}


debugger

const charCodeParser = (char : string | undefined) : number => {
	let input = char?.charCodeAt(0);
	if(input === undefined){
		return 0;	
	}
	if(input >= 65 && input < 96) {
		return input - 38 
	} 
	
	return input - 96 
}

const main =  (rucksack : string) : number => {
	let l = getLineLength(rucksack);

	let middleIndex = l/2;

	let [comp1, comp2] = [rucksack.slice(0, middleIndex), rucksack.slice(middleIndex, l)]
	let output = getItemType(comp1, comp2) 

	return charCodeParser(output);
}

let sum = 0;
let group = [];

for(let i = 0; i < lines.length; i++){
	group.push(lines[i])
	
}

console.log(sum);
