package com.casestudy.flightsearch.exception;

import java.util.Optional;

import com.casestudy.flightsearch.model.Flight;

public class FlightNotFoundException extends RuntimeException{

	private String message;
	//private int code;
	
	 public FlightNotFoundException(String message) {
	        super(message);
	        this.message = message;
	    }
	 

		public FlightNotFoundException() {
		super();
	}


		/*
		 * public int getCode() { return code; }
		 */
	    

		public String getMessage() {
			return message;
		}
		
		

		public void setMessage(String message) {
			this.message = message;
		}


		@Override
		public String toString() {
			return "CustomException [message=" + message + "]";
		}
	    
	    
	
}
