package com.abel.burgertracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.abel.burgertracker.models.Burger;
import com.abel.burgertracker.repositories.BurgerRepository;

@Service
public class BurgerService {
	
	private final BurgerRepository burgerRepository;
	
	public BurgerService(BurgerRepository burgerRepository) {
		this.burgerRepository = burgerRepository;
	}
	
	public List<Burger> allBurgers(){
		return burgerRepository.findAll();
		
	}
	
	// creates a burger
	 public Burger createBurger(Burger b) {
	     return burgerRepository.save(b);
	 }

}
