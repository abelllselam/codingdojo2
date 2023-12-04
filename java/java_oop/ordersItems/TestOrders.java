import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");

            
        // Order variables -- order1, order2 etc.
        Item item1 = new Item();
        Item item2 = new Item();
        Item item3 = new Item();
        Item item4 = new Item();

        

        //Item object 1
        item1.name = "mocha";
        item1.price = 2.0;

        // Item object 2
        item2.name = "latte";
        item2.price = 3.0;

        // Item object 3
        item3.name = "drip coffee";
        item3.price = 4.0;

        // Item object 4
        item4.name = "cappuccino";
        item4.price = 5.0;

    
        // Application Simulations
        // adding item1 to order2's item list and increment the order's total.
        order2.addItem(item1);


        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order3.ready);
    }
}
