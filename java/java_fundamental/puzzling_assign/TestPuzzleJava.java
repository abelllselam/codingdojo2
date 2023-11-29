import java.util.ArrayList;

public class TestPuzzleJava {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();

		System.out.println("-----------Get Ten Random Rolls------------");
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
		
    	        //..
		// Write your other test cases here.
		//..
		System.out.println("-----------Get A Random Letter------------");
		System.out.println("The random letter is: "+generator.getRandomLetter());

		System.out.println("----------Generate Password----------");
		System.out.println("The password is: " + generator.generatePassword());

		System.out.println("----Get New Password Set-----");
		System.out.println("Provide an integer for the new password:");
		String num = System.console().readLine();
		int fromStringToInt = Integer.parseInt(num);
		ArrayList<String> newPass = generator.newPassword(fromStringToInt);
		System.out.println("This is the new password: " + newPass);
	}
}
