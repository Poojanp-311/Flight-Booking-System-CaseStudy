package com.casestudy.flightsearch.exception;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	
	    @Value(value = "${data.exception.message1}")
	    private String message1;
	    @Value(value = "${data.exception.message2}")
	    private String message2;
	    @Value(value = "${data.exception.message3}")
	    private String message3;

	    
	    @ExceptionHandler(value = FlightAlreadyExistsException.class)
	    public ResponseEntity flightAlreadyExistsException(FlightAlreadyExistsException flightAlreadyExistsException) {
	        return new ResponseEntity<String>(message1, HttpStatus.BAD_REQUEST);
	    }
	    
	    
	    @ExceptionHandler(value = FlightNotFoundException.class)
	    public ResponseEntity flightNotFoundException(FlightNotFoundException flightNotFoundException) {
	        return new ResponseEntity<String>(message2, HttpStatus.NOT_FOUND);
	    }
	    
	   
	    @ExceptionHandler(value = Exception.class)
	    public ResponseEntity<Object> databaseConnectionFailsException(Exception exception) {
	        return new ResponseEntity<>(message3, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}


