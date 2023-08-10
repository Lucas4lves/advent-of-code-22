//Each rucksack has 2 compartments
//In the input fioe, each line represents two compartments of a same rucksack
//to get the item-type, one should identify the only char that is repeated on both halves of the string

const input = require('node:fs').readFileSync('./input', 'utf8');

interface Output {
	a : Array<any>,
	b : Array<any>,

}
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
	let d_comp1 = toArray(compartment1);
	let d_comp2 = toArray(compartment2);
	
	for(let k = 0; k < d_comp1.length; k++){
		for (let m = 0; m < d_comp1.length; m++){
			if(d_comp1[k] === d_comp2[m])
				{
					return  { 
						a: [d_comp1[k], k],
						b: [d_comp2[m], m],
					}
				}
		}
	}

}

const priorityScoreParser = (itemType : string) => {
	let lower = {

	}	
}


const main =  (rucksack : string) =>{
	let l = getLineLength(rucksack);
	let middleIndex = (l - 1)/2;

	let [comp1, comp2] = [rucksack.slice(0, middleIndex - 1), rucksack.slice(middleIndex, l - 1)]
	let output = (getItemType(comp1, comp2)) 
	console.log(output?.a[0]);
}

for (let i = 0; i < 2; i++){
	console.log(`ruck${i}: `, lines[i]);
	main(lines[i]);
}
