package com.casestudy.flightbooking.service;

import org.springframework.stereotype.Service;




import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.casestudy.flightbooking.model.Passenger;
import com.casestudy.flightbooking.repository.PassengerRepository;

import lombok.extern.slf4j.Slf4j;



@Service
@Slf4j
public class PassengerService {
	
	@Autowired
	private PassengerRepository passengerRepository;
	
	

	
	public List<Passenger> getAllPassengers() {
		List<Passenger> passengers  =new ArrayList<>();
		passengerRepository.findAll().forEach(passengers::add);
		 return passengers;
	}
	
	
	@Cacheable(cacheNames="pasg", key="#id")
	public Passenger getPassenger(Integer id) {
		log.info("fetching from db");
		
		return passengerRepository.findById(id).get();
	}
   
/*	public List<Passenger> getByLastName(String lastName, PageRequest pageRequest) {
		
		return passengerRepository.findByLastName(lastName, pageRequest);
	}*/

	
	public void addPassenger(Passenger passenger) {
		
		passengerRepository.save(passenger);
		}

	@CacheEvict(cacheNames="pasg", key="#id")
	public void deletePassenger(Integer id) {
		log.info("flight deleted with id " + id);
		passengerRepository.deleteById(id);
		
	}

	
 /*public void updatePassenger(Passenger passenger, Integer id) {
		
		passengerRepository.insert(passenger);
		
	}*/
	
	@CachePut(cacheNames="pasg", key="#person.id")
	public Passenger updatePersonUsingId(Integer id, Passenger person) {
		
		log.info("flight updated with id " + id);
		        Optional<Passenger> findPersonQuery = passengerRepository.findById(id);
		
		        Passenger personValues = findPersonQuery.get();
		
		        personValues.setId(person.getId());
		        personValues.setFirstName(person.getFirstName());
		        personValues.setLastName(person.getLastName());
		        personValues.setEmail(person.getEmail());
		        personValues.setPhone(person.getPhone());
		        personValues.setGender(person.getGender());
		        personValues.setQuantity(person.getQuantity());
		        
		
		        return passengerRepository.save(personValues);
		
		    }



	public Page<Passenger> getPassengerPagination(Integer pageNumber, Integer pageSize, String sortProperty) {
		// Page is a sublist of list of objects
		 Pageable pageable = null; // abstract interface for pagination information
	        if(null!=sortProperty){
	            pageable = PageRequest.of(pageNumber, pageSize, Sort.Direction.ASC,sortProperty);
	        }else {
	            pageable = PageRequest.of(pageNumber, pageSize, Sort.Direction.ASC,"firstName");
	        }
	        return passengerRepository.findAll(pageable);
	}


/*public Page<Passenger> getPassengerPagination(Integer pageNumber, Integer pageSize) {
		
		Sort sort = Sort.by(Sort.Direction.ASC, "firstName");
		Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
		return passengerRepository.findAll(pageable);
		
  */
}
