/*
    The solution is based on doing an infinite cycle by using a while loop.
    The while loop continues as long as there is a single swap, and we keep
    track of the swaps by using a counter. Everytime the for loop ends we 
    check if the run was "clean" without swaps. If it was, we escale the
    infinite while loop, because the array is ordered. However, if the 
    counter at the end of the for() loop returns higher than 0, it is time
    to start again. We just need to make sure we start with a fresh counter
    again by using counter = 0. 

*/
function bubbleSort(array)
	{
		// Write your code here.
		var currentNumber;
		var nextNumber;
		var sorted=false;
        var counter=0;

        //The cycle is performed as long as the array is unsorted
		while(sorted==false)
			{
				counter=0;//Reset count to start fresh
				for(var i = 0;i<array.length;i++)
					{
						currentNumber=array[i];
						nextNumber=array[i+1];
						if(currentNumber>nextNumber)
							{
								//isSorted=false;
								array[i]= nextNumber;
								array[i+1]= currentNumber;
								counter++;
							}
					}
				if(counter==0){sorted=true;}//evaluate if the run had no swaps to escape cycle
			}
		return array;
    }
    
var unsorted = [8,5,2,9,5,6,3];

console.log(bubbleSort(unsorted));