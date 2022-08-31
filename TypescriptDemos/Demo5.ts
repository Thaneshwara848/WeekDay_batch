class Demo5
{
    myname="prakash";
    constructor()
    {
        console.log("hi Demo 5 Consttructor ....!")
    }
}
class A  extends Demo5
{
    name="Thanesh";
    constructor()
    {
           // let name="Suresh";
            super();
            console.log("Hi A class Cosntructro ....!"+this.name)
            
            console.log("MY name is ....!"+this.myname)
    }
}

var a = new A();

