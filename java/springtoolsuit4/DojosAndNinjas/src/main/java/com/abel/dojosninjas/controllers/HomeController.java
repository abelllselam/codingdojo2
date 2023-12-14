package com.abel.dojosninjas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.abel.dojosninjas.models.Dojo;
import com.abel.dojosninjas.models.Ninja;
import com.abel.dojosninjas.services.DojoService;
import com.abel.dojosninjas.services.NinjaService;

@Controller
public class HomeController {
	@Autowired
	DojoService dojoService;
	
	@Autowired
	NinjaService ninjaService;
	
	//Get mapping for rendering the dojo new jsp	
	@GetMapping("/dojos/new")
	public String createDojoForm(@ModelAttribute("dojo") Dojo dojo) {
		return "dojoNew.jsp";
	}

	//post mapping for processing the binded new dojo form	
	@PostMapping("/process/dojos/new")
	public String create(@ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "dojoNew.jsp";
		}
		else {
			dojoService.create(dojo);
			return "redirect:/ninjas/new";
		}
	}
	
	//Get mapping for rendering the new ninja form
	@GetMapping("/ninjas/new")
	public String createNinjaForm(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", dojoService.getAll());
		return "ninjaNew.jsp";
	}
	
	//Post mapping for processing the new ninja form
	@PostMapping("/process/ninjas/new")
	public String createNinja(@ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		Long dojoId = ninja.getDojo().getId();
		
        //System.out.println("***************************"+dojoId);
		if(result.hasErrors()) {
			return "ninjaNew.jsp";
		}
		else {
		//System.out.println(ninja);
			ninjaService.create(ninja);
			
			return "redirect:/dojos/" + dojoId;
			
		}
	}
	
	@GetMapping("/dojos/{dojoId}")
	public String showOne(@PathVariable Long dojoId, Model model) {
//		System.out.println(dojoId);
//		Dojo allTheDojosNinjas = dojoService.getOne(dojoId);
//		Ninja allNinjas = ninjaService.getOne(dojoId);
		model.addAttribute("dojo",dojoService.getOne(dojoId));
//		model.addAttribute("ninjas",allNinjas);
		
		return "showOne.jsp";
	}
	
	
	
}
