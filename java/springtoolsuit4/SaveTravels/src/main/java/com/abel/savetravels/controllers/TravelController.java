package com.abel.savetravels.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.abel.savetravels.models.Travel;
import com.abel.savetravels.services.TravelService;

import jakarta.validation.Valid;

@Controller
public class TravelController {
	private final TravelService travelService;
	
	public TravelController(TravelService travelService) {
		this.travelService = travelService;
	}

	@GetMapping("/expenses")
	public String index(@ModelAttribute("travel")Travel travel) {
		return "index.jsp";
	}
	
	@PostMapping("/process/expenses")
	public String create(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
	if(result.hasErrors()) {
		return "index.jsp";
	}
	else {
		travelService.createTravel(travel);
		return "redirect:/expenses";
	}

}
}
