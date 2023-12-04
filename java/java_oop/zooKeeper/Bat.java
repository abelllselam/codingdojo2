/**
 * Bat
 */
public class Bat extends Mammal {

    public Bat(){
        this.eLevel = 300;
    }

    public void fly(){
        setEnergy(-50);
        System.out.println("The bat is airborne: " + getEnergy());
    }
    public void eatHumans(){
        setEnergy(25);
        System.out.println("A big meal: " + getEnergy());
    }
    public void attackTown(){
        setEnergy(-100);
        System.out.println("Just destroyed a town: " + getEnergy());
    }
}