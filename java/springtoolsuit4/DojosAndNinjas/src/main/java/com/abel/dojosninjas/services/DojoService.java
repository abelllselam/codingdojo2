package com.abel.dojosninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abel.dojosninjas.models.Dojo;
import com.abel.dojosninjas.repositories.DojoRepository;

@Service
public class DojoService {
	@Autowired
	DojoRepository dojoRepository;
	
	
	//Create a dojo instance in the DB	
	public Dojo create(Dojo dojo) {
		return dojoRepository.save(dojo);
	}
	
	//Get one by using the id
	public Dojo getOne(Long id) {
		Optional<Dojo> dojo = dojoRepository.findById(id);
		
		if(dojo.isPresent()) {
			return dojo.get();
		}
		else {
			return null;
		}
	}
	
	//Get all the Dojos
		public List<Dojo> getAll(){
			return dojoRepository.findAll();
		}
		
	}


