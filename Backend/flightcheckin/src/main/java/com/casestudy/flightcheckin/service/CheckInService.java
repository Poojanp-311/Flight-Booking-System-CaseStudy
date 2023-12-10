package com.casestudy.flightcheckin.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


import com.casestudy.flightcheckin.dto.CheckInDto;
import com.casestudy.flightcheckin.model.CheckIn;

public interface CheckInService {
	ResponseEntity<CheckInDto> addReferenceId(CheckInDto checkin);
	CheckInDto getFlightDetail(Integer _id);
	ResponseEntity<?> deleteFlight(@PathVariable Integer _id);
	CheckInDto updateFlight(Integer _id, CheckInDto checkin);
	public List<CheckInDto> getAllPassengers();
		
}
