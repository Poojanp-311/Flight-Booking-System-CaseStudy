package com.casestudy.flightsearch.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.casestudy.flightsearch.exception.FlightAlreadyExistsException;
import com.casestudy.flightsearch.exception.FlightNotFoundException;
import com.casestudy.flightsearch.model.Flight;


public interface FlightService {
	
	ResponseEntity<Flight> addFlight(Flight flight) throws FlightAlreadyExistsException;
	Flight getFlight(Integer flight_id) throws FlightNotFoundException;
	List<Flight> getAllFlights() throws FlightNotFoundException;
	List<Flight> getFlights(String departure_city, String arrival_city,
			String departure_date) throws FlightNotFoundException;
	ResponseEntity<?> deleteFlight(Integer flight_id) throws FlightNotFoundException;
	ResponseEntity<?> updateFlight(Integer flight_id, Flight flight);
}
