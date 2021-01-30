class vec3
    {
        constructor(x, y, z)
            {
                this.x=x;
                this.y=y;
                this.z=z;
            }
        multiply(n)
            {
                this.x=this.x*n;
                this.y=this.y*n;
                this.z=this.z*n;
            }
    }

//dot product helps us find out if two vector are orthogonal
//orthogonal is when to vectors are perpendicular to each other
//if two vectors are perpendicular to each other, their cos(A.B)=90
function DotProduct(v1, v2)
    {
        return (v1.x * v2.x) + (v1.y*v2.y) + (v1.z*v2.z);
    }

function FindAngleRadians(v1, v2)
    {
        return Math.acos
            (
                DotProduct(v1, v2)
                /
                ( FindLenght(v1) * FindLenght(v2) )
            );
    }

function FindLenght(v1)
    {
        //console.log(v1)
        return Math.sqrt( Math.pow(v1.x, 2) + Math.pow(v1.y, 2) + Math.pow(v1.z, 2));
    }

function ConvertRadiansToDegrees(n)
    {
        return n* (180/Math.PI);
    }

directionA = new vec3(0, 1, 0);
directionB = new vec3(1, 0, 0);

directionC = new vec3(1, 1, 1);
directionD = new vec3(0, 1, -1);

//directionA.multiply(3);
//console.log(directionA);

//let dotResult = DotProduct(directionC, directionD);
//console.log("dotResult: ", dotResult);
//let angle = FindAngle(directionA, directionB);
//console.log("angle: ", angle);

let len = FindLenght(directionA);
console.log("lenght: ", len);

let radians = FindAngleRadians(directionA, directionB);
console.log("radians: ", radians);

let degrees = ConvertRadiansToDegrees(radians);
console.log("degrees: ", degrees);