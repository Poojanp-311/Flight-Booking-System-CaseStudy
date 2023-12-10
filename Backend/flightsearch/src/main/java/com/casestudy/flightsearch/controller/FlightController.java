/*package com.casestudy.flightsearch.controller;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import com.casestudy.flightsearch.exception.FlightAlreadyExistsException;
import com.casestudy.flightsearch.exception.FlightNotFoundException;

import com.casestudy.flightsearch.model.Flight;
import com.casestudy.flightsearch.repository.FlightRepository;

import lombok.extern.slf4j.Slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@Slf4j
//@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {
	
	    
	
	@Value("${server.port}")
	  private String port;
	
	
	@Autowired
	private FlightRepository flightRepository;
	
	@RequestMapping("/demoflg")
	public String CheckFlight() {
		return "application is up on port " + port;
	}
	
	
	@RequestMapping("/flights")
	@ResponseBody
	public ResponseEntity<List<Flight>> getAllFlights() {
		
		log.warn("Please provide the correct url");
		log.info("All Flight will be displayed in browser");
		
		
			//flightRepository.findAll();
			return new ResponseEntity<List<Flight>>(flightRepository.findAll(),HttpStatus.OK);
		
	}
	
	@RequestMapping(method=RequestMethod.GET , value="/flights/{departure_city}/{arrival_city}/{departure_date}")
	public List<Flight> getFlights(@PathVariable("departure_city") String departure_city, @PathVariable("arrival_city") String arrival_city,
			@PathVariable("departure_date") String departure_date) {
		log.info("Flight by "+ departure_city + " " + arrival_city + " " + departure_date);
		
		if(flightRepository.findByCity(departure_city, arrival_city, departure_date).isEmpty()){ 
			throw new FlightNotFoundException();
		}else {
		return flightRepository.findByCity(departure_city,arrival_city,departure_date);
		}
	}
	
	
	@RequestMapping(method=RequestMethod.GET, value="/flights/{flight_id}")
	@ResponseBody
	public Optional<Flight> getFlight(@PathVariable Integer flight_id) throws FlightNotFoundException{
		
		log.info("flight request by id "+ flight_id);
		Optional<Flight> flight;
		if(flightRepository.findById(flight_id).isEmpty() ) {
			throw new FlightNotFoundException();
		}else {
			flight = flightRepository.findById(flight_id);
		}
		return flight;
		
		
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value="/flights")
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
		return new ResponseEntity("New Flight added successfully", HttpStatus.OK);
			
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/flights/{flight_id}")
	public ResponseEntity<?> deleteFlight(@PathVariable Integer flight_id) throws FlightNotFoundException{
	
		log.info("flight deleted with id "+ flight_id);
		

		if(flightRepository.findById(flight_id).isEmpty() ) {
			throw new FlightNotFoundException();
		}
		flightRepository.deleteById(flight_id);
		return new ResponseEntity<>("flight deleted successfully",HttpStatus.ACCEPTED);
	}
		
		
		
	

	@RequestMapping(method=RequestMethod.PUT, value="/flights/{flight_id}")
	public ResponseEntity<?> updateFlight(@PathVariable Integer flight_id, @RequestBody Flight flight) {
		
		log.info("flight updated with id "+ flight_id);
		flight.setFlight_id(flight_id);
		flightRepository.save(flight);
		return new ResponseEntity<>("flight updated successfully",HttpStatus.ACCEPTED);
		
	}
	
	 //@ExceptionHandler(value = FlightNotFoundException.class)
	   // public ResponseEntity<String> FlightNotFoundException(FlightNotFoundException flightNotFoundException) {
	      //  return new ResponseEntity<String>("Flight not found", HttpStatus.CONFLICT);
	  //  }
	
	// @ExceptionHandler(value = FlightAlreadyExistsException.class)
	  //  public ResponseEntity<String> FlightAlreadyExistsException(FlightAlreadyExistsException flightAlreadyExistsException) {
	       // return new ResponseEntity<String>("Flight already exists", HttpStatus.CONFLICT);
	  //  }

}


*/


package com.casestudy.flightsearch.controller;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Recover;
import org.springframework.retry.annotation.Retryable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.server.ResponseStatusException;


import com.casestudy.flightsearch.exception.FlightAlreadyExistsException;
import com.casestudy.flightsearch.exception.FlightNotFoundException;

import com.casestudy.flightsearch.model.Flight;
import com.casestudy.flightsearch.repository.FlightRepository;
import com.casestudy.flightsearch.service.FlightService;


import lombok.extern.slf4j.Slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {
	
	    
	
	@Value("${server.port}")
	  private String port;
	
	
	@Autowired
	private FlightService flightService;
	
	// https://www.youtube.com/watch?v=2dTyedeTHy8
	int count = 0;
	@RequestMapping("/demoflg")
	@Retryable(value = HttpStatusCodeException.class, maxAttempts=3, backoff = @Backoff(3000), exclude =
    HttpClientErrorException.class)
	public String CheckFlight() {
		int maxAttempts = 3;
		// code using loop
		while(count<maxAttempts) {
		   count++;
		   System.out.println("calling another service to get status!!");
		   throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return "application is up on port " + port;
		
		// code using if else 
		/*count++;
		if(count==1) {
			System.out.println("calling another service to get status!! - 1");
		    throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
		}else if(count==2) {
			System.out.println("calling another service to get status!! - 2");
		    throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
		}else if(count==3) {
			System.out.println("calling another service to get status!! - 3");
		    throw new HttpServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
		}else {
			return "application is up on port " + port;
		}
		*/
		
	}
	
	@Recover
    public String recover(HttpServerErrorException exception) {
        return "oops :( try again after some time!!";
    }
	
	
	@RequestMapping("/flights")
	@ResponseBody
	public ResponseEntity<List<Flight>> getAllFlights() throws FlightNotFoundException{
		
		
		
		return new ResponseEntity<List<Flight>>((List<Flight>)flightService.getAllFlights() ,HttpStatus.OK);
		
	}
	
	@RequestMapping(method=RequestMethod.GET , value="/flights/{departure_city}/{arrival_city}/{departure_date}")
	public ResponseEntity<List<Flight>> getFlights(@PathVariable("departure_city") String departure_city, @PathVariable("arrival_city") String arrival_city,
			@PathVariable("departure_date") String departure_date) throws FlightNotFoundException{
	
		
		return new ResponseEntity(flightService.getFlights(departure_city, arrival_city, departure_date), HttpStatus.OK);
	}
	
	
	@RequestMapping(method=RequestMethod.GET, value="/flights/{flight_id}")
	@ResponseBody
	public ResponseEntity getFlight(@PathVariable Integer flight_id) throws FlightNotFoundException{
		
		
		return new ResponseEntity(flightService.getFlight(flight_id), HttpStatus.OK);
		
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value="/flights")
	public ResponseEntity<Flight> addFlight(@RequestBody Flight flight) throws FlightAlreadyExistsException{
		
		
		
		return new ResponseEntity(flightService.addFlight(flight), HttpStatus.OK);
			
		
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/flights/{flight_id}")
	public ResponseEntity<?> deleteFlight(@PathVariable Integer flight_id) throws FlightNotFoundException{

		return new ResponseEntity<>(flightService.deleteFlight(flight_id),HttpStatus.ACCEPTED);
	}
		
		
		
	

	@RequestMapping(method=RequestMethod.PUT, value="/flights/{flight_id}")
	public ResponseEntity<?> updateFlight(@PathVariable Integer flight_id, @RequestBody Flight flight) {
		
		
		
		return new ResponseEntity<>(flightService.updateFlight(flight_id, flight),HttpStatus.ACCEPTED);
		
	}
	
	 //@ExceptionHandler(value = FlightNotFoundException.class)
	   // public ResponseEntity<String> FlightNotFoundException(FlightNotFoundException flightNotFoundException) {
	      //  return new ResponseEntity<String>("Flight not found", HttpStatus.CONFLICT);
	  //  }
	
	// @ExceptionHandler(value = FlightAlreadyExistsException.class)
	  //  public ResponseEntity<String> FlightAlreadyExistsException(FlightAlreadyExistsException flightAlreadyExistsException) {
	       // return new ResponseEntity<String>("Flight already exists", HttpStatus.CONFLICT);
	  //  }

	
}



		
		
		
	



		
		
		
	