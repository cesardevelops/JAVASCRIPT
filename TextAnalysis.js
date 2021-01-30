
function getText(filename)
    {
        let fs = require('fs');
        try {  
                let inputArray = fs.readFileSync(filename, 'utf8');
                inputArray = inputArray.replace(/(\r\n|\n|\r)/gm," ");
                return inputArray.toString();    
            } 
        catch(e)
            {
                console.log('Error:', e.stack);
            }
    }
//returns an array
function getArrayFromText(s)
    {
       let array = s.split(" ");
       return bubbleSort(array);
    }


function bubbleSort(array)
    {
        let counter = 0;
        let isSorted = false;
        let first;
        let second; 

        while(isSorted == false)
            {
                isSorted = true;
                for(let i = 0; i<array.length-1-counter;i++)
                    {
                    if(array[i].length>array[i+1].length)
                        {
                            swap(i, i+1, array);
                            isSorted=false;
                        }
                    }
                    counter++//we increase the counter until the loop is done.
            }
        return array;

    }

function swap(i,j,array)
    {
        let first = array[i];
        let second = array[j];
        array[i] = second;
        array[j] = first;
    }
function makeArray(size, value)
    {
        let arrayWithCounts=[];// =new Array(lastWord.length+1);
        for(let i = 0; i<= size; i++)
            {
                arrayWithCounts.push(value);
            }
        return [...arrayWithCounts];
    }

function wordCounts(array)
    {
        let lastWord = array[array.length-1];
        let arrayWithCounts= makeArray(lastWord.length, 0);
        //console.log("empth array: ",arrayWithCounts);
        let wordSize;
        for(let i = 0; i<array.length;i++)
            {
                wordSize = array[i].length;
                arrayWithCounts[wordSize]+=1;
            }
        return [...arrayWithCounts];
    }

//returns a number
function getBiggestItem(input)
    {
        let inputArray =[...input];
        let max=0;
        for(let k =0;k<inputArray.length;k++)
            {
                if (inputArray[k]>max)
                    {
                        max=inputArray[k];
                    }
            }
        return max;
    }

//returns a string
function makeLine(array, height,j)
    {
        let line='';
        let inputArray = [...array];
        //adding some spaces at the beginning.
        if(height-j<10){line +=height-j+" ";}
        if(height-j>=10){line +=height-j;}

        for(let i = 1;i<inputArray.length;i++)
                {
                    //if the numner is smaller
                    if(inputArray[i] < height-j)
                        {
                            line+="  ";
                        }
                    if(inputArray[i] >= height-j)
                        {
                            line+="☐ ";
                            inputArray[i]-=1;
                        }
                }
        return line;

    }

//returns a string
function getGraph(inputArray)
{
    //find heigth
    let maxheight = getBiggestItem(inputArray);
    let isEmpty=false
    let zeroCounter=0;
    let result = "";
    for(let j = 0;j<maxheight;j++)
        {
            result+= makeLine([...inputArray],maxheight,j);
            result+="\n";
            //result+=maxheight;
        }
    return result; 
}


let text = getText("file.txt");
//console.log(text);
let arrayFromText = getArrayFromText(text);
//console.log("orderedArray", arrayFromText);
let arrayWithWordCounts = wordCounts([...arrayFromText]);
//console.log("arrayWithWordCounts",arrayWithWordCounts);
let graphString = getGraph(arrayWithWordCounts);
console.log(graphString);

/*
let item = '  ';
for(let i =1; i<arrayWithWordCounts.length;i++)
    {
        if(i<10){item += i+" ";}
        if(i>=10){item += i+"";}

       // item += i+"  ";
        


    }
    
console.log(item);
*/
console.log("  WORD SIZE");




