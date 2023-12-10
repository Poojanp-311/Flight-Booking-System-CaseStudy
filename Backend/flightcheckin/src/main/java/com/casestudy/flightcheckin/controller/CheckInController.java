package com.casestudy.flightcheckin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.annotation.Retryable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.HttpStatusCodeException;


import com.casestudy.flightcheckin.dto.CheckInDto;
import com.casestudy.flightcheckin.model.CheckIn;
import com.casestudy.flightcheckin.repository.CheckInRepository;
import com.casestudy.flightcheckin.service.CheckInService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Recover;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class CheckInController {

	@Autowired
	private CheckInService checkInService;
	
	
	@RequestMapping(method=RequestMethod.POST, value="/checkin")
	public ResponseEntity<CheckInDto> addReferenceId(@RequestBody CheckInDto checkin) {
		
		
		return new ResponseEntity(checkInService.addReferenceId(checkin),HttpStatus.ACCEPTED);
	}
	
	
	
	@RequestMapping(method=RequestMethod.GET, value="/checkin/{_id}")
	//@Cacheable(value="checkin", key="#_id")
	public ResponseEntity<CheckInDto> getFlightDetail(@PathVariable Integer _id) {
		
		
		return new ResponseEntity(checkInService.getFlightDetail(_id),HttpStatus.ACCEPTED);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/checkin/{_id}")
	
	//@CacheEvict(value="checkin", key="#_id")
	public ResponseEntity<?> deleteFlight(@PathVariable Integer _id) {
        return new ResponseEntity<>(checkInService.deleteFlight(_id),HttpStatus.ACCEPTED);
		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/checkin/{_id}")
	//@CachePut(value="checkin", key="#_id")
	public ResponseEntity<?> updateFlight(@PathVariable Integer _id, @RequestBody CheckInDto checkin) {
	
		 return new ResponseEntity<>(checkInService.updateFlight(_id, checkin),HttpStatus.ACCEPTED);
		
	}
	
	@RequestMapping("/checkin")
	public ResponseEntity<?> getAllPassengers() {
		List<CheckInDto> chk = checkInService.getAllPassengers();
		return ResponseEntity.ok(chk);
	}
	
	
}
