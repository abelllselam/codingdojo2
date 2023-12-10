package com.abel.device;

public class Phone extends Device {

	public Phone() {
		// TODO Auto-generated constructor stub
	}
	
	public void makeCall() {
		int newBatteryLevel  = this.getBattery()-5;
		super.setBattery(newBatteryLevel);
		System.out.println("you made a call:");
		System.out.println(newBatteryLevel);
		
	}
	public void playGame() {
		int newBatteryLevel  = this.getBattery()-20;
		super.setBattery(newBatteryLevel);
		System.out.println("You play a game:");
		System.out.println(newBatteryLevel);
		
	}
	public void charging() {
		int newBatteryLevel  = this.getBattery()+ 50;
		super.setBattery(newBatteryLevel);
		System.out.println("You charged your phone:");
		System.out.println(newBatteryLevel);
	}
	
	
	

}
