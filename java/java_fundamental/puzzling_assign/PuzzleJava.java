/**
 * PuzzleJava
 */
import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {
    // a random object from the Random class
    Random randomNum = new Random();

    public ArrayList<Integer>getTenRolls(){
        ArrayList<Integer> randomRolls = new ArrayList<Integer>();
        int min = 1;
        int max =20;
        int count = 1;

        while(count<=10){
            int randomRoll = randomNum.nextInt(max-min+1)+min;
            randomRolls.add(randomRoll);
            count++;
        }
         return randomRolls;
    }

    public String getRandomLetter(){
         int randomLetter = randomNum.nextInt(26);
        
        char[] alphabet = new char[26];

        // I got this from an online source to auto populate the array with the alphabets. 
        for(int i = 0; i<26; i++){
            alphabet[i] = (char) ('a' + i);
        }
        return String.valueOf(alphabet[randomLetter]);
    }

    public String generatePassword() {
        String newString = "";

        for(int i = 0; i<8; i++){
            newString += getRandomLetter();
        }
        return newString;
    }

    public ArrayList<String> newPassword(int num){
        ArrayList<String> newPass = new ArrayList<String>();
        
        for(int i = 0; i <num; i++){
            String newString = "";
            for(int j = 0; j<8; j++){
             newString += getRandomLetter();
        }
        newPass.add(newString);
        // newString = "";
        }
        return newPass;
    }
}