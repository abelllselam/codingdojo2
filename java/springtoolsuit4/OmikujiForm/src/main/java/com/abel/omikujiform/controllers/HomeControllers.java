package com.abel.omikujiform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class HomeControllers {
	@GetMapping("/omikuji")
	public String index() {
		return "index.jsp";
	}
	
	@PostMapping("/omikuji/process")
	public String processForm(@RequestParam(value="number") Integer number, @RequestParam(value="city") String city, @RequestParam(value="person") String person, @RequestParam(value="hobby") String hobby, @RequestParam(value="thing") String thing, @RequestParam(value="say") String say, HttpSession session) {
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("thing", thing);
		session.setAttribute("say", say);
		
		
		return "redirect:/omikuji/show";
		
	}
	
	@GetMapping("/omikuji/show")
	public String showForm(Model model, HttpSession session) {
		Integer number = (Integer) session.getAttribute("number");
		String city = (String) session.getAttribute("city");
		String person = (String) session.getAttribute("person");
		String hobby = (String) session.getAttribute("hobby");
		String thing = (String) session.getAttribute("thing");
		String say = (String) session.getAttribute("say");
		
		return "show.jsp";
	}
	

}
