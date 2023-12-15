package com.abel.yogacourse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.abel.yogacourse.models.Course;
import com.abel.yogacourse.models.LoginUser;
import com.abel.yogacourse.models.User;
import com.abel.yogacourse.services.CourseService;
import com.abel.yogacourse.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class HomeController {
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private CourseService courseService;
	
	public HomeController() {
		
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
				
		List<Course> allcourses = courseService.getAll();
		model.addAttribute("courses", allcourses);
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
	
// add a new course page is rendered here
	@GetMapping("/courses/new")
	public String newBook(@ModelAttribute("course") Course course, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
		return "newCourse.jsp";
	}
	
//	processing the new course. Adding it to the DB
	@PostMapping("/process/courses/new")
	public String processNewCourse(@Valid @ModelAttribute("course") Course course, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "newCourse.jsp";
		}
		Long userId = (Long) session.getAttribute("user_id");
//		Long userId = book.getUser().getId();
		//retriving and saving the user id because it is not persisting in the database before it is being saved.
		User user = userService.getUser(userId);
		
		course.setUser(user);
		
		courseService.create(course);
		return "redirect:/home";
	}
	
//	Get read share one course
	@RequestMapping("/courses/show/{course_id}")
	public String ShowOne(@ModelAttribute("course") Course course, HttpSession session, Model model, @PathVariable("course_id") Long id) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
		
//		model.addAttribute("dojo",dojoService.getOne(dojoId));
		model.addAttribute("course", courseService.getOne(id));
//		List<Book> allBooks = bookService.getOne(id);
//		model.addAttribute("books", allBooks);
		
		
		return "showOne.jsp";
	}
	
//	Update the course render page (get)
	@GetMapping ("/courses/{course_id}/edit")
	public String showToUpdateCourse(@ModelAttribute("course") Course course,Model model,@PathVariable("course_id") Long id, HttpSession session ) {
		Long userId = (Long) session.getAttribute("user_id");
		if(userId==null) {
			return "redirect:/login/reg";
		}
		
		model.addAttribute("course", courseService.getOne(id));
		
		return "updateCourse.jsp";
		
		
	}
	
//Post update with validation
	@PutMapping("/update/courses/{course_id}")
	public String update(@Valid @ModelAttribute("course") Course course, BindingResult result, Model model, @PathVariable ("course_id") Long id, HttpSession session) {
//		System.out.println(id);
		course.setId(id);
//		System.out.println(course.getId());
				
		if(result.hasErrors()) {
			model.addAttribute("course", course);
			return "updateCourse.jsp";
		}
		else {
			courseService.update(course);
			
			return "redirect:/home";
		}
	}
	
//delete a course
	 @RequestMapping(value="/courses/{course_id}", method=RequestMethod.DELETE)
	    public String destroy(@ModelAttribute("course") Course course, BindingResult result, @PathVariable("course_id") Long id) {
	        courseService.delete(id);
	        return "redirect:/home";
	    }


}
