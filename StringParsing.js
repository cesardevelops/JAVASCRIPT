function vowelsAndConsonants(s) 
{
    var array = s.split('');
    var vowels="";
    var consonants="";
    //console.log(array.length);
    for (var i=0;i<array.length;i++)
    {
        //console.log(i);
        
        if (array[i]=="a" || array[i]=="e" || array[i]=="i" || array[i]=="o" || array[i]=="u")
        {
            vowels = vowels + array[i] + "\n";
            //console.log(array[i]);
        }
        else
        {
            consonants = consonants + array[i] + "\n";
            //console.log(array[i]);
        }
        
        
    }
    return vowels+consonants;
}

console.log(vowelsAndConsonants("javascript"));