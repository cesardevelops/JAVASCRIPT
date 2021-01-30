class Entity
    {
        constructor()
            {
                this._position = [0,0,0];
                this._rotation = [0,0,0];
            }
        static info(x)
            {
                if(x===undefined)
                    { 
                        console.log("undefined");}
                else
                    {
                        console.log("this is the Entity Info: " + x._position);
                    }
            }
    }

class Human extends Entity
    {
        constructor(n)
            {
                super();
                this._firstname = null;
                this._gender = null;
                this._lastname = null;
                this._height = null;
                this._weight = null;
                this._address = new Address();
            }

        set gender(g)
            {
                this._gender = this.setGender(g);
            }

        setGender(g)
            {
                if((g.toLowerCase()!="male")&&(g.toLowerCase()!="female"))
                    {
                        return null;
                    }
                else
                    {
                        return g.toLowerCase();
                    }
            }
    }

class Address
    {
        constructor()
            {
                this._number = null;
                this._street = null;
                this._unit = null;
                this._city = null;
                this._state = null;
                this._postalCode = null;
            }
    }

function printInfo(o)
    {

        if(typeof o == 'object')
            {
                console.log(Object.entries(o));
            }
        else
            {
                console.log("not human");
            }
    }


Cesar = new Human("cesar");
Player1 = new Entity();
console.log(Cesar._position);

Entity.info(Player1);
Entity.info();