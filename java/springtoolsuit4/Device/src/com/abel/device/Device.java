package com.abel.device;

public class Device {
	private int battery = 100;
	
	public Device() {
		
	}
	
	public Device(int battery) {
		this.battery = battery;
		
	}
	
	public int batteryLife() {
		return this.battery;
	}

	public int getBattery() {
		return battery;
	}

	public void setBattery(int battery) {
		this.battery = battery;
	}
	
	

}
