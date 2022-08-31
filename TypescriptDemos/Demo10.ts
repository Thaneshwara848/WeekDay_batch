class Demo10
{
   //private  name="Thanesh"; with in clas 
  // public  name="Thanesh";
  protected  name="Thanesh";

    constructor()
    {

    }

}
class XYZ extends Demo10
{

    constructor()
    {
        super();
        console.log("My name is : "+this.name)
    }
}

var v = new XYZ();
