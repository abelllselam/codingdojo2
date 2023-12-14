package com.abel.loginreg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.abel.loginreg.models.LoginUser;
import com.abel.loginreg.models.User;
import com.abel.loginreg.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	public UserController() {
		
	}
	
	@GetMapping("/login/reg")
	public String loginReg(Model model) {
		model.addAttribute("user", new User());
		model.addAttribute("loginUser", new LoginUser());
		return "loginreg.jsp";
	}
	
	@PostMapping("/process/login/reg")
	public  String processRegister(@Valid @ModelAttribute("user") User user, BindingResult result, Model model, HttpSession session) {
//		reject if email is already taken
		if(userService.getUser(user.getEmail())!= null) {
			result.rejectValue("email","Unique", "Email already in use!");
		}
		
//		reject if passwords dont match
		if(!user.getPassword().equals(user.getConfirm())) {
			result.rejectValue("password", "Match", "password dont match");
		}
		
//		redirect if errors
		if(result.hasErrors()) {
			model.addAttribute("loginUser", new LoginUser());
			return "loginreg.jsp";
		}
		User newUser = userService.registerUser(user);
		session.setAttribute("user_id", newUser.getId());
		
		return "redirect:/home";
	}
	
	@GetMapping("/home")
	public String index(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
		
		model.addAttribute("user", userService.getUser(userId));
		
		return "welcome.jsp";
	}
	
	@PostMapping("/process/login")
	public String processLogin(@Valid @ModelAttribute("loginUser") LoginUser loginUser, BindingResult result, Model model, HttpSession session) {
		User loggingUser = userService.login(loginUser, result);
		if(result.hasErrors()) {
			model.addAttribute("user", new User());
			return "loginreg.jsp";
		}
		session.setAttribute("user_id", loggingUser.getId());
		return "redirect:/home";
	}
	
	@GetMapping("/logout/home")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/login/reg";
	}
}
