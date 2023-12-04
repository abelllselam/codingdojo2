public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount acct1 = new BankAccount();
        BankAccount acct2 = new BankAccount();
        BankAccount acct3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        acct1.deposit("savings",500);
        acct2.deposit("savings",500);
        acct3.deposit("savings",500);
        acct1.deposit("checking",50);
        acct2.deposit("checking",50);
        acct3.deposit("checking",50);

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        acct1.withdraw("savings",100);
        acct2.withdraw("savings",100);
        acct3.withdraw("savings",100);
        acct1.withdraw("checking",5);
        acct2.withdraw("checking",5);
        acct3.withdraw("checking",5);

        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println("Number of Bank accounts: " + BankAccount.getAccount());
        System.out.println("Total Money: " + BankAccount.getTotalMoney());

    }
}
