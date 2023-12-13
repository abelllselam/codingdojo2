package com.abel.savetravels.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
	public String index(Model model, @ModelAttribute("travel")Travel travel) {
		List<Travel> travels = travelService.allTravels();
		model.addAttribute("travels", travels);
		return "index.jsp";
	}
	
	@PostMapping("/process/expenses")
	public String create(@Valid @ModelAttribute("travel") Travel travel, BindingResult result,Model model) {
	if(result.hasErrors()) {
		List<Travel> travels = travelService.allTravels();
		model.addAttribute("travels", travels);
		return "index.jsp";
	}
	else {
		travelService.createTravel(travel);
		return "redirect:/expenses";
	}

}
	@RequestMapping("/expenses/edit/{id}")
	public String edit(Model model, @PathVariable("id") Long id) {
		Travel travel = travelService.findTravel(id);
		model.addAttribute("travel",travel);
		return "edit.jsp";
		
	}
	
	@RequestMapping(value="/expenses/{id}", method=RequestMethod.PUT)
	public String Update(@Valid @ModelAttribute("travel") Travel travel, BindingResult result, Model model) {
		if(result.hasErrors()) {
			model.addAttribute("travel", travel);
			return "edit.jsp";
		}
		else {
			travelService.updateTravel(travel);
			return "redirect:/expenses";
		}
	}
	
	@RequestMapping(value="/expenses/delete/{id}", method=RequestMethod.DELETE)
	public String destroy(@PathVariable("id")Long id) {
		travelService.deleteTravel(id);
		return "redirect:/expenses";
	}
	
	@RequestMapping("/expenses/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Travel travel =  travelService.findTravel(id);
		model.addAttribute("travel", travel);
		return "show.jsp";
	}
}
