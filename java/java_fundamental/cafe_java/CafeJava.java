public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 3;
        double latte = 5;
        double cappuccino = 4;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println("Your order is " + (isReadyOrder1? "ready" : "not ready"));

        // Order status for Noah
        if(isReadyOrder4) {
            System.out.println("You order is ready");
            System.out.println("Total: " + cappuccino);
        }

        else {
            System.out.println(customer4 + " your order is not ready");
        }

        // Order status and price for Sam
        if(isReadyOrder2) {
            double sum = 2;
            sum *= latte;

            System.out.println("Your total for two lattes: " + sum);
        }
        else {
            System.out.println(customer2 + " your order is not ready");
        }

        // Jimmy order mistake and the corrected total (What he owes to make up the difference)

        double priceDifference;
        priceDifference = latte - dripCoffee;

        System.out.format("%s, owes %.1f, because of the price difference", customer3, priceDifference);

    }
}
