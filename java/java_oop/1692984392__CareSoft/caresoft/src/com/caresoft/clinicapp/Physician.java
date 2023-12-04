package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	
	// TO DO: Constructor that takes an IDcopy
	public Physician(int id) {
		super(id);
	}
    // TO DO: Implement HIPAACompliantUser!
		
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }
	
	@Override
    public boolean assignPin(int pin) {
    	if(pin > 100000) {
    		this.pin = pin;
    		return true;
    	}
    	
    	return false;
    }
    
    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
    	if(this.id.equals(confirmedAuthID)) {
    		return true;
    	}
    	return false;
    	
    }
    
    // TO DO: Setters & Getters

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
	
 
    
}
