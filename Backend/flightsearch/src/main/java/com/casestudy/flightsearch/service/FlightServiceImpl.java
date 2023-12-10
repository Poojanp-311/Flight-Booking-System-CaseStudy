package com.casestudy.flightsearch.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.casestudy.flightsearch.controller.FlightController;
import com.casestudy.flightsearch.exception.FlightAlreadyExistsException;
import com.casestudy.flightsearch.exception.FlightNotFoundException;
import com.casestudy.flightsearch.model.Flight;
import com.casestudy.flightsearch.repository.FlightRepository;

import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
public  class FlightServiceImpl implements FlightService{
	
	
	@Autowired
	private FlightRepository flightRepository;
	
	@Override
	public ResponseEntity<Flight> addFlight(@RequestBody Flight flight) throws FlightAlreadyExistsException{
		
		log.info("Adding new flight to database " + flight.getFlight_id() + " " + flight.getFlight_no() + " " + flight.getFlight_name() 
		+ " " + flight.getDeparture_city() + " " + flight.getArrival_city() + " " + flight.getDeparture_date() + " " + flight.getDeparture_time()
		+ " " + flight.getFare());
		
		if(flightRepository.existsById(flight.getFlight_id())) {
			throw new FlightAlreadyExistsException();
		}
			//Flight flg = flightRepository.insert(flight);
		     //return flg;
		flightRepository.insert(flight);
		return new ResponseEntity("New Flight added Successfully", HttpStatus.OK);
			
		
	}

@Override

public Flight getFlight(@PathVariable Integer flight_id) throws FlightNotFoundException{
		
	log.info("flight request by id "+ flight_id);
	
		Flight flight;
		if(flightRepository.findById(flight_id).isEmpty() ) {
			throw new FlightNotFoundException();
		}else {
			flight = flightRepository.findById(flight_id).get();
		}
		return flight;
		
		
	}

@Override	
public List<Flight> getAllFlights() {
	log.warn("Please provide the correct url");
	log.info("All Flight will be displayed in browser");
	return  (List<Flight>) flightRepository.findAll();

}

@Override
public List<Flight> getFlights(@PathVariable("departure_city") String departure_city, @PathVariable("arrival_city") String arrival_city,
			@PathVariable("departure_date") String departure_date) throws FlightNotFoundException{
		
	log.info("Flight by "+ departure_city + " " + arrival_city + " " + departure_date);
		if(flightRepository.findByCity(departure_city, arrival_city, departure_date).isEmpty()){ 
			throw new FlightNotFoundException();
		}else {
		return flightRepository.findByCity(departure_city,arrival_city,departure_date);
		}
	}
	
	

@Override

public ResponseEntity<?> deleteFlight(@PathVariable Integer flight_id) throws FlightNotFoundException{
	
	log.info("flight deleted with id "+ flight_id);
	

	if(flightRepository.findById(flight_id).isEmpty() ) {
		throw new FlightNotFoundException();
	}
	flightRepository.deleteById(flight_id);
	return new ResponseEntity<>("flight deleted successfully",HttpStatus.ACCEPTED);
}

@Override

public ResponseEntity<?> updateFlight(@PathVariable Integer flight_id, @RequestBody Flight flight) {
	
	log.info("flight updated with id "+ flight_id);
	
	flight.setFlight_id(flight_id);
	flightRepository.save(flight);
	return new ResponseEntity<>("flight updated successfully",HttpStatus.ACCEPTED);
	
}





	

}
