public class Gorilla extends Mammal {
    public void throwSomething(){
        setEnergy(-5);
        System.out.println("Stop throwing rocks: " + getEnergy());
    }
    public void eatBananas(){
        setEnergy(10);
        System.out.println("Great Bananas: " + getEnergy());
    }
    public void Climb(){
        setEnergy(-10);
        System.out.println("Just climbed a tree: " + getEnergy());
    }
    
}
