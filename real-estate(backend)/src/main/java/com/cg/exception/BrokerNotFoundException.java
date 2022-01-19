package com.cg.exception;

public class BrokerNotFoundException extends RuntimeException {
	
	public BrokerNotFoundException(String message){
		super(message);
	}

}
