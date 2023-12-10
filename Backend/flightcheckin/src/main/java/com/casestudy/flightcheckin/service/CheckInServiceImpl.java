package com.casestudy.flightcheckin.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import com.casestudy.flightcheckin.dto.CheckInDto;
import com.casestudy.flightcheckin.mapper.CheckInMapper;
import com.casestudy.flightcheckin.model.CheckIn;
import com.casestudy.flightcheckin.repository.CheckInRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CheckInServiceImpl implements CheckInService{
	
	@Autowired
	CheckInRepository checkInRepository;
	
	@Autowired
	CheckInMapper checkinMapper;

	@Override
	public ResponseEntity<CheckInDto> addReferenceId(CheckInDto checkin) {
		log.info("create checkin begin");
		CheckIn check = checkInRepository.insert(checkinMapper.fromDto(checkin));
		checkinMapper.toDto(check);
	//	checkInRepository.insert(checkin);
		log.info("create checkin end");
		return new ResponseEntity("new flight added", HttpStatus.OK);
	}

	@Override
	public CheckInDto getFlightDetail(Integer _id) {
		log.info("flight request by id "+ _id + " from db");
		CheckIn checkin = checkInRepository.findById(_id).get();
		return checkinMapper.toDto(checkin);
	}

	@Override
	public ResponseEntity<?> deleteFlight(Integer _id) {
		log.info("flight deleted with id "+ _id);
		checkInRepository.deleteById(_id);
		return new ResponseEntity<>("flight deleted successfully",HttpStatus.ACCEPTED);
	}

	@Override
	public CheckInDto updateFlight(Integer _id, CheckInDto checkin) {
		checkin.set_id(_id);
		CheckIn chk = checkInRepository.save(checkinMapper.fromDto(checkin));
		log.info("flight updated successfully ");
		return checkinMapper.toDto(chk);
	}

	@Override
	public List<CheckInDto> getAllPassengers() {
		List<CheckIn> checkin  = checkInRepository.findAll();
		return checkinMapper.toDtoList(checkin);
		
	}

	
}
