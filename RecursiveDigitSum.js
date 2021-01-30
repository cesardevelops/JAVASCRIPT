
//https://www.hackerrank.com/challenges/recursive-digit-sum/forum?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking
//https://medium.com/@nitinpatel_20236/javascript-adding-extremely-large-numbers-and-extra-long-factorials-229b6055cb1a

function RecursiveDigitSum(n, k)
    {
        let stringNum="";
        for(let i = 0; i<k; i++)
            {
                stringNum=stringNum.concat(n.toString());
            }
        //return stringNum;

        return getSuperDigit(stringNum);

    }

function getSuperDigit(s)
    {
        //console.log(s);
        if(s.length<2){return s;}
        else
            {
            //console.log(s);
             return getSuperDigit(digitSum(s));
            }
    }

//the number might be too bug to make a sum, and that is why this part would
//fail with bit numbers.
function digitSum(st)
    {
        let sum = 0;
        for(let i = 0; i<st.length; i++)
            {
                sum+=Number(st.charAt(i));
            }
        return sum.toString();

    }
    //console.log(digitSum("9875"));
    let result = RecursiveDigitSum(9875, 4);
    console.log("result: ", result);
    //console.log(getSuperDigit("12"));

