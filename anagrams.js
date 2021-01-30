let stringA = "showman";
let stringB = "woman";

arrayA = stringA.split('');
arrayB = stringB.split('');
let counter=0;
let total = 0;

//arrayB.splice(2, 1);
for(let i = 0; i<arrayA.length;i++)
    {
        for(let j = 0; j<arrayB.length;j++)
            {
               if(arrayA[i]==arrayB[j])
                    {
                        //arrayA.splice(i, 1);
                        //arrayB.splice(j, 1);
                        arrayA[i]=0;
                        arrayB[j]=0;
                    } 
                
                
            } 
    }

for(let i = 0; i<arrayA.length;i++)
    {
        if(arrayA[i]!=0){counter+=1;}
    }
for(let i = 0; i<arrayB.length;i++)
    {
        if(arrayB[i]!=0){counter+=1;}
    }

console.log("total: ", counter);


console.log("arrayA: ", arrayA);
console.log("arrayB: ", arrayB);