class A 
{
    abc()
    {
            console.log("Hi A class method ")
    }
}
class B extends A 
{
    abc()
    {
            console.log("Hi B  class method ")
    }
}

var b = new B();
b.abc();