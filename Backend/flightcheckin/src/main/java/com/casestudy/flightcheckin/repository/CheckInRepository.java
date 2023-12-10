package com.casestudy.flightcheckin.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.casestudy.flightcheckin.model.CheckIn;



@Repository
public interface CheckInRepository extends MongoRepository<CheckIn,Integer> {
	
	

}
