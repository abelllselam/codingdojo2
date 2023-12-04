import java.util.HashMap;
import java.util.Set;

/**
 * map_of_the_hashmatique
 */
public class map_of_the_hashmatique {

    public static void main(String[] args) {
        HashMap<String, String> musicMap = new HashMap<String, String>();

        musicMap.put("Song 1", "Song 1 lyrics");
        musicMap.put("Song 2", "Song 2 lyrics");
        musicMap.put("Song 3", "Song 3 lyrics");
        musicMap.put("Song 4", "Song 4 lyrics");


        String oneSong = musicMap.get("Song 1");
        System.out.println(oneSong);

        Set<String> keys = musicMap.keySet();
        for(String key : keys){
            System.out.println(key + ":" + musicMap.get(key));
        }
    }
}