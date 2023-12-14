package com.abel.dojosninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abel.dojosninjas.models.Ninja;
import com.abel.dojosninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	
	@Autowired
	NinjaRepository ninjaRepository;
	
	//Create a ninja instance in the DB	
		public Ninja create(Ninja ninja) {
			return ninjaRepository.save(ninja);
		}
		
		//Get one by using the id
		public Ninja getOne(Long id) {
			Optional<Ninja> ninja = ninjaRepository.findById(id);
			
			if(ninja.isPresent()) {
				return ninja.get();
			}
			else {
				return null;
			}
		}
		
		//Get all the Ninjas
			public List<Ninja> getAll(){
				return ninjaRepository.findAll();
			}
			
	}


