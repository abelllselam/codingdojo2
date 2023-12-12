package com.abel.savetravels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.abel.savetravels.models.Travel;

public interface TravelRepository extends CrudRepository<Travel, Long> {
	
//	get all
	List<Travel> findAll();

}
