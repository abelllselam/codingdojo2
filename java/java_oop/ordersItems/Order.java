import java.util.ArrayList;

public class Order {
    public String name;
    public double total;
    public boolean ready;
    public ArrayList<Item>items = new ArrayList<>();

    public Order(String name) {
        this.name = name;
        this.total = 0.0;
        this.ready = false;
    }

    public void addItem(Item item){
        items.add(item);
        total += item.price;
    }

    public void orderReady(){
        ready = true;
    }
}
