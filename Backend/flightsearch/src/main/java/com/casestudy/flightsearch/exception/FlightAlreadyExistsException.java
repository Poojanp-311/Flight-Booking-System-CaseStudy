package com.casestudy.flightsearch.exception;

public class FlightAlreadyExistsException extends RuntimeException{
	
	private String message;
	//private int code;
	
	 public FlightAlreadyExistsException(String message) {
	        super(message);
	        this.message = message;
	    }
	 

		public FlightAlreadyExistsException() {
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
			return "FlightAlreadyExistsException [message=" + message + "]";
		}
	
	

}
