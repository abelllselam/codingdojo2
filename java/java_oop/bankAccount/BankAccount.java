public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(){
        accounts++;
        
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance(){
        return checkingBalance;
    }

    public double getSavingBalance(){
        return savingsBalance;
    }

    public static int getAccount(){
        return accounts;
    }

    public static double getTotalMoney(){
        return totalMoney;
    }


    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void deposit(String accType, double amount){
        if("checking" == accType){
            checkingBalance += amount;
        }
        else if ("savings" == accType) {
            savingsBalance +=amount;
        }

        totalMoney += amount;
    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    public double withdraw(String accType,double amount){
        if("checking" == accType && checkingBalance >= amount){
            checkingBalance -= amount;
            totalMoney -=amount;
            
        }
        else if ("savings" == accType && savingsBalance >= amount) {
            savingsBalance -=amount;
            totalMoney -=amount;
            
        }
        else {
            System.out.println("insufficient funds");
        }

        return totalMoney;
    }
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public double getCurrentBalance(String accType){
        return "checking" == accType? checkingBalance : savingsBalance;

    }
}
