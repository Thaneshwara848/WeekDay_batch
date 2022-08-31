class Demo4
{
    site=5;
   private money=500000;
    constructor(id:any,name:string, age:number )
    {
        console.log("Hi "+name + " My age is :  "+age )
    }
    abc()
    {
        console.log("Hi abc Method.....!")
    }
}
class Demo6 extends Demo4
{

}
var dd = new Demo4("ABC123","Thanesh",26);
dd.abc();


