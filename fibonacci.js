/*

F(0) = 0

F(1) = 1

F(2) = F(2-1) + F(2-2)
F(2) = 1

F(3) = F(3-1) + F(3-2)
F(3) = F(2) + F(1)
F(3) = 1 + 1
F(3) = 2

F(4) = F(4-1) + F(4-2)
F(4) = (F3)+ F(2)
F(4) = 2 + 1
F(4) = 3

*/

function FibonacciSequence(end)
    {
        var seq = [0, 1]
        for (i=2;i<end;i++)
            {
                seq.push(seq[i-1]+seq[i-2]);
            }
        return seq;
    }

function Fibonacci(n)
    {
        if(n == 0){return 0;}
        if(n == 1){return 1;}
        return Fibonacci(n-1) + Fibonacci(n-2);
    }


console.log(Fibonacci(8));
console.log(FibonacciSequence(8));
