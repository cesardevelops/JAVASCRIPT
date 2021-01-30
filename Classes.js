class Human
    {
        constructor()
            {
                this.name=null;
                this.lastname=null;
                this.age=null;
                this.height=null;
                
            }
        get fullName()
            {
                return this.getFullname();
            }
        getFullname()
            {
                return this.name + " " + this.lastname;
            }
            

    }

class Dog
    {
        constructor()
            {
                this.name=null;
                this.age=null;
                this.owner= new Human();
            }
        
    }

    Link = new Dog();
    Cesar = new Human();
    Cesar.name = "Cesar";
    Cesar.lastname = "Montero";
    console.log(Cesar.fullName);