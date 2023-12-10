package com.casestudy.admin.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
//import org.springframework.retry.annotation.Backoff;
//import org.springframework.retry.annotation.Recover;
//import org.springframework.retry.annotation.Retryable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import com.casestudy.admin.advice.TrackExecutionTime;
import com.casestudy.admin.model.Flight;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import lombok.extern.slf4j.Slf4j;

//@RibbonClient(name = "flightsearch", configuration = RibbonConfiguration.class)
@Slf4j
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {
	
	private static final String ADMIN ="admin" ;   // for reselience4j retry and circuit breaker
	
	@Autowired
	private RestTemplate restTemplate;
	
//	------------------------------------------------------------------------------------------
    
	@TrackExecutionTime           // this will give u the time taken to execute this post request 
	@PostMapping(value="/addflg")
	public ResponseEntity<String> addFlight(@RequestBody Flight flights) {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		HttpEntity<Flight> httpentity=new HttpEntity<>(flights,headers);
		flights=restTemplate.postForObject("http://flightsearch/flights",httpentity,Flight.class);
		return new ResponseEntity<>("New Flight added successfully", HttpStatus.OK);
	}
	
	@TrackExecutionTime
	@GetMapping(value="/getflg")
	public List<Flight> getAllFlights() {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		HttpEntity<List> httpentity=new HttpEntity<>(headers);
	    
	return restTemplate.getForObject("http://flightsearch/flights", List.class);
		
		
	}
	
//	-------------------------------------------------------------------------------------
	
	// https://www.youtube.com/watch?v=Z4CSGsOLb1c
	// reselience4j -> reslience4j, spring aop dependencies
	
	private int attempts=1;  // just to compare with maxAttempts written in application.yml file
	
	@Retry(name = ADMIN,fallbackMethod = "fallback_retry")
	@RequestMapping(value = "/deletflg/{flight_id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteFlight(@PathVariable Integer flight_id) {
		
		log.info("Search Service call attempted: " + attempts++);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<Flight> httpentity=new HttpEntity<>(headers);
		restTemplate.delete("http://flightsearch/flights/"+flight_id, httpentity, Flight.class);
		
//	    log.info("Search Service Called");
		return new ResponseEntity<>("Flight deleted successfully",HttpStatus.OK);
		
	}
	
	// u can provide dummy response as well to keep customer engage with the application
	public ResponseEntity<String> fallback_retry(Exception e){  
    return new ResponseEntity<String>("Search Service is Down, please try after some time :( " , HttpStatus.INTERNAL_SERVER_ERROR);

    }
	
// ---------------------------------------------------------------------------------------------------
	
	// https://www.youtube.com/watch?v=2dTyedeTHy8
	// retry using -> spring retry, aspectjswewver -> dependancy
	// need to annotate main class with @EnableRetry
	
//	@Retryable(value = RuntimeException.class, maxAttempts = 3, backoff = @Backoff(3000))
//	@RequestMapping(value = "/deletflg/{flight_id}", method = RequestMethod.DELETE)
//	public ResponseEntity<String> deleteFlight(@PathVariable Integer flight_id) {
//		log.info("Search Service call attempted: "+ attempts++);
//		HttpHeaders headers = new HttpHeaders();
//		headers.setContentType(MediaType.APPLICATION_JSON);
//		HttpEntity<Flight> httpentity=new HttpEntity<>(headers);
//		restTemplate.delete("http://flightsearch/flights/"+flight_id,httpentity,Flight.class);
//	    log.info("Search Service Called");
//	    return new ResponseEntity<>("flight deleted successfully",HttpStatus.OK);
//	}
//	
//	@Recover
//    public ResponseEntity<String> recover(Exception e) {
//		//attempts=1;
//		return new ResponseEntity<>("Search Service is Down, please try after some time :)",HttpStatus.INTERNAL_SERVER_ERROR);
//    }
	
// -------------------------------------------------------------------------------------------
	
//	Difference between circuit breaker and retry 
//	The Circuit Breaker pattern has a different purpose than the "Retry pattern".
//	The "Retry pattern" enables an application to retry an operation in the expectation that the operation will eventually succeed. 
//	The Circuit Breaker pattern prevents an application from performing an operation that's likely to fail.	
//	https://www.youtube.com/watch?v=b6R4dElDtRc-> circuit breaker	

    // hystrix performs a single execution call when dependent service is down
	//@HystrixCommand(fallbackMethod="updateFallbackFlight")
	
	// circuit breaker performs several execution calls till it hits the certain threshold mentioned in application.yml file
	// with the help actuator/health u will get to know the circuit breaker pattern in detail
	
	@CircuitBreaker(name = "ADMIN", fallbackMethod="updateFallbackFlight")
	@RequestMapping(value = "/updateflg/{flight_id}", method = RequestMethod.PUT)
	public ResponseEntity<String> updateFlight(@PathVariable Integer flight_id, @RequestBody Flight flights) {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		HttpEntity<Flight> httpentity=new HttpEntity<>(flights,headers);
		restTemplate.put("http://flightsearch/flights/"+flight_id, httpentity, Flight.class);
		return new ResponseEntity<>("Flight updated successfully",HttpStatus.OK) ;
	}
	
	// u can provide dummy response as well to keep customer engage with the application
	  public ResponseEntity<String> updateFallbackFlight(@PathVariable Integer flight_id, @RequestBody Flight flights) {
		  return new ResponseEntity<>("service unavailable, please try after some time!!", HttpStatus.INTERNAL_SERVER_ERROR) ;
	  }
	 
	
//  ----------------------------------------------------------------------------------------------------	  
	
	@GetMapping(value="/checkflg")
	public String CheckFlight() {
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		HttpEntity<String> httpentity=new HttpEntity<>(headers);
		
	return restTemplate.getForObject("http://flightsearch/demoflg", String.class);
		
		
	}
	
	
	
	
	
	
}
