package com.casestudy.flightbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Sort.Direction;


import com.casestudy.flightbooking.model.Passenger;

import com.casestudy.flightbooking.service.PassengerService;
import com.casestudy.flightbooking.service.SequenceGeneratorService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FlightPassengerController {

	
	@Autowired
	private PassengerService passengerService;
	
	@Autowired
	private SequenceGeneratorService service;
	
	
	
	
	
	/*@RequestMapping("/showFlightPassDetails")
	public String showFlightPassDetails(@RequestParam("flightId") Long flightId, ModelMap modelMap) {
		Flight flight = flightRepository.findOne(flightId);
		modelMap.addAttribute("flight", flight);
		return "completeReservation.jsp"
	}*/
	
	@RequestMapping("/passengers")
	public List<Passenger> getAllPassengers() {
		return passengerService.getAllPassengers();
	}
	
	
	
	
	@RequestMapping("/passengers/{id}")
	public Passenger getPassenger(@PathVariable Integer id) {
		return passengerService.getPassenger(id);
	}
	
	/*@RequestMapping("/passengers/{lastName}")
	public List<Passenger> getByLastName(@PathVariable String lastName, PageRequest pageRequest) {
		return passengerService.getByLastName(lastName, 
				PageRequest.of(0, 3, Direction.ASC, "firstName"));
	}*/
	
	@RequestMapping(method=RequestMethod.POST, value="/passengers")
	public void addPassenger(@RequestBody Passenger passenger) {
		passenger.setId(service.getSequenceNumber("user_sequence"));
		passengerService.addPassenger(passenger);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/passengers/{id}")
	public void deletePassenger(@PathVariable Integer id) {
		passengerService.deletePassenger(id);
	}

	@RequestMapping(method=RequestMethod.PUT, value="/passengers/{id}")
	public void updatePersonUsingId(@PathVariable Integer id, @RequestBody Passenger passenger) {
		passengerService.updatePersonUsingId(id, passenger);
	}
	
//----------------------------------Paging and Sorting-------------------------------------------//  
	
	@RequestMapping(value= "/pagingAndShortingPassengers/{pageNumber}/{pageSize}",
            method = RequestMethod.GET)
    public Page<Passenger> passengerPagination(@PathVariable Integer pageNumber,
                                             @PathVariable Integer pageSize)
                                              {
        return passengerService.getPassengerPagination(pageNumber, pageSize, null);
    }
	
	@RequestMapping(value= "/pagingAndShortingPassengers/{pageNumber}/{pageSize}/{sortProperty}",
            method = RequestMethod.GET)
    public Page<Passenger> passengerPagination(@PathVariable Integer pageNumber,
                                             @PathVariable Integer pageSize,
                                             @PathVariable String sortProperty)
                                              {
        return passengerService.getPassengerPagination(pageNumber, pageSize, sortProperty);
    }
	
}
