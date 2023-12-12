package com.abel.burgertracker.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.abel.burgertracker.models.Burger;
import com.abel.burgertracker.services.BurgerService;

import jakarta.validation.Valid;

@Controller
public class BurgerController {
	private final BurgerService burgerService;
	public BurgerController(BurgerService burgerService) {
		this.burgerService = burgerService;
	}
	
	@GetMapping("/")
	public String index(Model model, @ModelAttribute("burger") Burger burger) {
		List <Burger> burgers = burgerService.allBurgers();
		model.addAttribute("burgers", burgers);
		
		return "index.jsp";
	}
	
	@PostMapping("/burgers")
	public String create(@Valid @ModelAttribute("burger") Burger burger, BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}
		else {
			burgerService.createBurger(burger);
			return "redirect:/";
		}
	}

}
