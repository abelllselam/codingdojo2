package com.abel.daikichiroutes;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class HomeController {
	@RequestMapping("")
	public String index() {
		return "demoJsp.jsp";
	}
	
	@RequestMapping("/today")
	public String todayPage() {
		return "Today you will find luck in all your endeavors!";
	}
	
	@RequestMapping("/tomorrow")
	public String tomorrowPage() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	@RequestMapping("/travel/{place}")
	public String todayPage(@PathVariable("place") String place) {
		return "Congratulations! You will soon travel to " + place +"!";
	}
	
	@RequestMapping("/lotto/{number}")
	public String todayPage(@PathVariable("number") int number) {
		if(number % 2 == 0 ) {
			return "You will take a grand journey in the near future, but be weary of tempting offers";
		}
		else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.";
		}
	}
	
	
	

}
