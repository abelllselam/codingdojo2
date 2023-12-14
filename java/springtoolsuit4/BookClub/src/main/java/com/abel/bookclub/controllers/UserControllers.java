package com.abel.bookclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.abel.bookclub.models.Book;
import com.abel.bookclub.models.LoginUser;
import com.abel.bookclub.models.User;
import com.abel.bookclub.services.BookService;
import com.abel.bookclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserControllers {
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private BookService bookService;
	
	public UserControllers() {
		
	}
//	The login and registration page is rendered
	@GetMapping("/login/reg")
	public String loginReg(Model model) {
		model.addAttribute("user", new User());
		model.addAttribute("loginUser", new LoginUser());
		return "loginreg.jsp";
	}
	
//	The registration post method is processed here
	@PostMapping("/process/login/reg")
	public  String processRegister(@Valid @ModelAttribute("user") User user, BindingResult result, Model model, HttpSession session) {
//		reject if email is already taken
		if(userService.getUser(user.getEmail())!= null) {
			result.rejectValue("email","Unique", "Email already in use!");
		}
		
//		reject if passwords don't match
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
	
//	rendering the welcome (dashboard) page
	@GetMapping("/home")
	public String index(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
				
		List<Book> allBooks = bookService.getAll();
		model.addAttribute("books", allBooks);
		model.addAttribute("user",userService.getUser(userId));
		
		return "welcome.jsp";
	}
	
//	The login post method is processed here
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
	
//	logout and the clearing of the session is processed here
	@GetMapping("/logout/home")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/login/reg";
	}
	
// add a new book page is rendered here
	@GetMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
		return "newBook.jsp";
	}
	
//	processing the new book. Adding it to the DB
	@PostMapping("/process/books/new")
	public String processNewBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "newBook.jsp";
		}
		Long userId = (Long) session.getAttribute("user_id");
//		Long userId = book.getUser().getId();
		//retriving and saving the user id because it is not persisting in the database before it is being saved.
		User user = userService.getUser(userId);
		
		book.setUser(user);
		
		bookService.create(book);
		return "redirect:/home";
	}
	
//	Get read share one book
	@GetMapping("/books/{book_id}")
	public String ShowOne(@ModelAttribute("book") Book book, HttpSession session, Model model, @PathVariable("book_id") Long id) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
		
//		model.addAttribute("dojo",dojoService.getOne(dojoId));
		model.addAttribute("book", bookService.getOne(id));
//		List<Book> allBooks = bookService.getOne(id);
//		model.addAttribute("books", allBooks);
		
		
		return "showOne.jsp";
	}
}
