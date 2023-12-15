package com.abel.yogacourse.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abel.yogacourse.models.Course;
import com.abel.yogacourse.repositories.CourseRepository;


@Service
public class CourseService {

	@Autowired
	CourseRepository courseRepository;
	
//	get one book by using the id
	public Course getOne(Long id) {
		Optional<Course> book = courseRepository.findById(id);
		return book.isPresent()? book.get(): null;
	}
	
	public List<Course> getAll(){
		return courseRepository.findAll();
	}
	
	public Course create(Course c) {
		return courseRepository.save(c);
	}
	
	public Course update(Course c) {
		return courseRepository.save(c);
	}
	
	public void delete(Long id) {
		courseRepository.deleteById(id);
	}
	
	

}

