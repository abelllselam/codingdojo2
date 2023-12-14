package com.abel.loginreg.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.abel.loginreg.models.LoginUser;
import com.abel.loginreg.models.User;
import com.abel.loginreg.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public UserService() {
		
	}
	
	public User registerUser (User registeringUser) {
		String hashed = BCrypt.hashpw(registeringUser.getPassword(), BCrypt.gensalt());
		registeringUser.setPassword(hashed);
		return userRepository.save(registeringUser);
	}
	
	public User getUser(String email) {
		Optional <User> user = userRepository.findByEmail(email);
		return user.isPresent() ? user.get(): null;
	}
	
	public User getUser(long id) {
		Optional<User> user = userRepository.findById(id);
		return user.isPresent() ? user.get(): null;
	}
	
	public User login(LoginUser loginUser, BindingResult result) {
		if(result.hasErrors()) {
			return null;
		}
		User existingUser = getUser(loginUser.getEmail());
			if(existingUser == null) {
				result.rejectValue("email", "Unique", "Unknown email");
				return null;
			}
			if(!BCrypt.checkpw(loginUser.getPassword(), existingUser.getPassword())) {
				result.rejectValue("password", "Matches", "Incorrect password");
		}
			return existingUser;
	}
	
	
	
	
	

}
