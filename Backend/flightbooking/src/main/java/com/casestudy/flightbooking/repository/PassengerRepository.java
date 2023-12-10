package com.casestudy.flightbooking.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.flightbooking.model.Passenger;

public interface PassengerRepository extends MongoRepository<Passenger,Integer>{

	

	//List<Passenger> findByLastName(String lastName, Pageable pageable);
	
	

}

