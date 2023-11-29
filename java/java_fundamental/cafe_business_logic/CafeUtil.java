/**
 * CafeUtil
 */
import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int sum = 0; 
        for(int i = 1; i <=10; i++){
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[]prices) {
        // declaring and initializing the variable that will hold the sum of the added array values
        double sum = 0;
        for(int i = 0; i <prices.length; i++){
            sum += prices[i];
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for(int i = 0; i<menuItems.size(); i++) {
            System.out.println(i + " " +menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String>customers){
        System.out.println("Please enter your name.");
        String username = System.console().readLine();
        customers.add(username);
        int peopleAhead = customers.size() - 1;
        System.out.format("Hello, %s ! There are %d people ahead of you \n", username, peopleAhead );
        System.out.println(customers);
        
       

    }
}