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
	for(let k = 0; k < compartment1.length; k++){
		for (let m = 0; m < compartment2.length; m++){
			if(compartment1[k].charCodeAt(0) === compartment2[m].charCodeAt(0)){		
					return compartment1[k];
				}
		}
	}
}



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
let group : Array<string> = [];
let partial = 0; 

const getGroupType = (group : Array<string>) =>{
	// sorting a group by string length
	for(let i = 0; i < group.length; i++){
		for (let j = 0; j < group.length; j++){
			if(group[i].length < group[j].length){
				let temp = group[i];
				group[i] = group[j];
				group[j] = temp;
			}
		}		
	}

	console.log(group);

	for(let i = 0; i < group[0].length; i++){
		if(group[1].includes(group[0][i])){
			if(group[2].includes(group[0][i])){
				console.log(`Common char: ${group[0][i]}`)
				return group[0][i];
			}
		}	
	}
}

let newSum = 0;

for(let k = 0; k < lines.length; k++){
	group.push(lines[k]);
	if(group.length >= 3){
		newSum += charCodeParser(getGroupType(group));
		group = [];
		console.log("_______")
	}
}

console.log(newSum);
