abstract class A 
{
    abstract loan();
    withdraw(){

    }
}
class Demo8 extends A
{
    loan() {
        console.log("hear is some logic ....!")
    }   

}

interface I 
{
    loan();
}
class B  implements I 
{
    loan() {
       console.log("B class loan method implementation ")
    }
}