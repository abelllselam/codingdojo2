package com.abel.relationships.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

//...
@Entity
@Table(name="licenses")
public class License {
 
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String number;
 private Date expirationDate;
 private String state;
 @Column(updatable=false)
 private Date createdAt;
 private Date updatedAt;
 @OneToOne(fetch=FetchType.LAZY)
 @JoinColumn(name="person_id")
 private Person person;
 
 public License() {
     
 }
 
 // ...
 // getters and setters removed for brevity
 // ...
}

