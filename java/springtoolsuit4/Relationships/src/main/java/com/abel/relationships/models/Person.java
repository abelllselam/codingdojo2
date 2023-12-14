package com.abel.relationships.models;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

//...
@Entity
@Table(name="persons")
public class Person {
 
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String firstName;
 private String lastName;
 @Column(updatable=false)
 private Date createdAt;
 private Date updatedAt;
 @OneToOne(mappedBy="person", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
 private License license;
 
 public Person() {
     
 }
 // ...
 // getters and setters removed for brevity
 // ...
}

