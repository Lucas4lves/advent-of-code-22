const fs = require("fs"); 

const input = fs.readFileSync("./input", "utf8");

const lines = input.split("\n");

let stash = [];
let sum = 0;
let currentTopSum = 0;
let currentTopSumIndex; 

for(let i = 0; i < lines.length; i++){
	if(lines[i] !== ''){
		sum += parseInt(lines[i]);
	}else{
		if(currentTopSum < sum){
			currentTopSum = sum;
			currentTopSumIndex = stash.length;
		}
		stash.push(sum);
		sum = 0;
	}
}

console.log("Top Calories Count:", currentTopSum);
console.log("Top Calories Holder: Elf n°", currentTopSumIndex);

for(let k = 0; k < stash.length; k++){
	for(let m = 0; m < stash.length; m++){
		if(stash[k] < stash[m]){
			let temp = stash[k];
			stash[k] = stash[m];
			stash[m] = temp;
		}
	}
}

let topThreeHolders = stash.slice(stash.length -3, stash.length);
console.log("Top Three Holders: ", topThreeHolders);
console.log("Top Three Holder's sum:", topThreeHolders.reduce((a, b) => a + b));

