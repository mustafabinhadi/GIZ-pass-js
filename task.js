let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers)

// soritng array elements in ACD order
// the issue was in if condition using i instead of j

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

// soritng array elements in DESC order 
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


// Task solution
// Reading the txt file 
var fs = require ('fs')
var txt_file = fs.readFileSync('input.txt')

// Sort the data that token from a file in an array
let array=[]
// Convert the data type of array (string to numbers) 
array=txt_file.split(',')
array= array.map(elem=> parseInt(elem, 10))



// Function to sort array elements in ACD order
function asc(numbers){
    for(let i = 0 ; i < numbers.length ; i++)
	{
		for(let j = 0 ; j < numbers.length - 1 ; j++)
		{
			if(numbers[j] > numbers[j + 1])
			{
				let temp = numbers[j];
				numbers[j] = numbers[j + 1]
				numbers[j + 1] = temp;
			}
		}
	}
console.log("Numbers list After Asc sorting: ", numbers)
}

// Function to sort array elements in DESC order
function desc(numbers){
    for(let i = 0 ; i < numbers.length ; i++)
	{
		for(let j = 0 ; j < numbers.length - 1 ; j++)
		{
			if(numbers[j] < numbers[j + 1])
			{
				let temp = numbers[j];
				numbers[j] = numbers[j + 1]
				numbers[j + 1] = temp;
			}
		}
	}
    
    console.log("Numbers list After Desc sorting: ", numbers)
}


console.log("immutable numbers list: ", numbers)

// to sort the array in ACD order, then save it in a new file 'output.txt'

asc(array)
fs.writeFileSync('output.txt', array.toString());