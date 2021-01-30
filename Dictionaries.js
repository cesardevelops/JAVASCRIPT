

function PopulateDictionary(dictionary, sentence)
    {
        let tmpArray = StringToArray(sentence);
        console.log(tmpArray);
        
        for(let i = 0; i<tmpArray.length; i++)
            {
                //if the value is empty, then add 1
                if(dictionary.get(tmpArray[i])==undefined)
                    {
                        dictionary.set(tmpArray[i],1);
                    }
                //otherwise, there is already a value, so add one more.
                else
                    {
                        dictionary.set(tmpArray[i],dictionary.get(tmpArray[i])+1);
                    }
            }
    }

function StringToArray(string)
    {
        return string.split(" ");
    }


function checkMagazine(magazine, note)
    {
        let magazineDictionary = new Map();
        PopulateDictionary(magazineDictionary, magazine);
        let noteArray = StringToArray(note);
        let isAllWords=true;

        for(let i = 0; i<noteArray.length; i++)
            {


                if(magazineDictionary.get(noteArray[i])==undefined)
                    {
                        isAllWords=false;
                        break;
                    }
                if(magazineDictionary.get(noteArray[i])==0)
                    {
                        console.log("ran out of words");
                        isAllWords=false;
                        break;
                    }
                if(magazineDictionary.get(noteArray[i])>0)
                    {
                        console.log('4 words found');
                        magazineDictionary.set(noteArray[i], magazineDictionary.get(noteArray[i])-1);
                    }
                
            }
        return isAllWords;
    }



let magazine = "two times three is not four";
let note="two times two is four";
console.log(checkMagazine(magazine, note));

//console.log(magazineDictionary);
//find in magazine Dictionary all elements from noteDictionary
    //before the for loop, declare variable hasAllWords and set it to true;

    //if the result is undefined, then hasAllwords is false
    //if the result is found, then substract 1
    //if the result is 0, hasAllWords is false

//return hasAllWords