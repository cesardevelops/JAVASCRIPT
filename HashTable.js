function HashStringToInt(s, tableSize)
    {
        let primeA=13;
        let primeB=17;
        hash = primeA * primeB;
        for(var i = 0; i<s.length; i++)
            {
                hash = (hash*s.charCodeAt(i))%tableSize;
                
            }
       return hash;
    }

class HashTable
    {
        constructor()
            {
                this.table = new Array(100);
            }
        setItem(key, value)
            {
                let idx = HashStringToInt(key, this.table.length);
                this.table[idx]=value;
            }
        getItem(key)
            {
                let idx = HashStringToInt(key, this.table.length);
                return this.table[idx];
            }
    }

myTable = new HashTable();
myTable.setItem("firstName", "Cesar");
myTable.setItem("lastName", "Montero");
myTable.getItem("firstName");
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));