class Person
    {
        #prenoun;
        #posessive;
        constructor(n, a, g)
            {   this.name=n;
                this.age=a;
                this.gender=g;
                this.interests=[];
                this.#prenoun="empty";
                this.#posessive="empty";
                this.#SetGender();
               
            }
        AddInterest(i)
            {
                this.interests.push(i);
            }
        #SetGender()
            {
                if (this.gender=="male")
                    {
                        this.#prenoun="He";
                        this.#posessive="His";
                    }
                else
                    {
                        this.#prenoun="She";
                        this.#posessive="Her";
                    }
            }  
        Bio()
            {
                console.log(this.#posessive + " name is " + this.name);
                console.log(this.#prenoun + " is " + this.age + " years old.");
                if (this.interests=='')
                    {
                        console.log(this.#prenoun+" has no interests.");
                    }
                else
                    {
                        console.log(this.#posessive + " interests are: " + this.interests); 
                    }
                
                
            }
        Greeting()
            {
                console.log("Hi! I'm "+this.name);
            }
        static Help()
            {
                console.log("This describes what this method does.");
            }
    }


class Teacher extends Person
    {
        constructor(n)
            {
                super(n);
            }
        Greeting()
            {
                console.log("hello I am "+this.name+", and I'm a Teacher");
            }
    }
class Student extends Person
    {
        constructor(n)
            {
                super(n);
            }
        Greeting()
            {
                //console.log("hello I am a Student");
                super.Greeting();
            }
    }

function Parent(n)
    {
        this._name = n
        this.Greeting = function()
            {
                console.log("Hello, my name is "+ this.name+ "and I am a Parent");
            }
    }



//console.log(Cesar._age);
//Cesar= new Student("Cesar");
//Hugo = new Teacher('Hugo');
//Hugo.Greeting();
//Julio= new Parent("Julio");
//Julio.Greeting();

//constructor(n, a, g)
Cesar = new Person("Cesar", 39, "male");
//console.log(Cesar.prenoun);
//Cesar.Greeting();
Cesar.AddInterest("Bonsai");
Cesar.AddInterest("Games");
Cesar.Bio();
console.log(Cesar.interests);
Person.Help();
//console.log(Person.posessive);