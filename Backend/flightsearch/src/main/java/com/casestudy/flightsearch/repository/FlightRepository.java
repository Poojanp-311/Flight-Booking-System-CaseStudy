package com.casestudy.flightsearch.repository;

import java.util.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.casestudy.flightsearch.model.Flight;

@Repository
public interface FlightRepository extends MongoRepository<Flight,Integer>{

	/*@Query("{'Departure_City': ?0, 'Arrival_City:' ?1, 'Departure_Date:' ?2}")
	//@Query("from Flight where Departure_City=:Departure_City and Arrival_City=:Arrival_City and Departure_Date=:Departure_Date")
	//List<Flight> findByCity(@Param("traveling from") String Departure_City, @Param("going to") String Arrival_City, @Param("planning on") Date Departure_Date);
	List<Flight> findByCity(String Departure_City, String Arrival_City, Date Departure_Date);*/
	
	@Query("{'departure_city' : ?0, 'arrival_city' : ?1 , 'departure_date' : ?2 }")
	List<Flight> findByCity(String departure_city, String arrival_city, String departure_date);
}
