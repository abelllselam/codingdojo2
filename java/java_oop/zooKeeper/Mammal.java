public class Mammal {
    public int eLevel;

    // the class Mammal constructor
    public Mammal(){
        this.eLevel = 100;
    }

    public Mammal(int eLevel){
        this.eLevel = eLevel;
    }

    public void setEnergy(int newLevel){
        this.eLevel += newLevel;
    }

    public int getEnergy(){
        return this.eLevel;
    }

    public int displayTheEnergyLevel(){
        return this.eLevel;
    }
    
}
