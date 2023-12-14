package com.abel.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abel.bookclub.models.Book;
import com.abel.bookclub.repositories.BookRepository;

@Service
public class BookService {

	@Autowired
	BookRepository bookRepository;
	
//	get one book by using the id
	public Book getOne(Long id) {
		Optional<Book> book = bookRepository.findById(id);
		return book.isPresent()? book.get(): null;
	}
	
	public List<Book> getAll(){
		return bookRepository.findAll();
	}
	
	public Book create(Book b) {
		return bookRepository.save(b);
	}
	
	public Book update(Book b) {
		return bookRepository.save(b);
	}
	
	public void delete(Long id) {
		bookRepository.deleteById(id);
	}
	
	

}
