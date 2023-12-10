package com.casestudy.flightcheckin.test;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.casestudy.flightcheckin.controller.CheckInController;
import com.casestudy.flightcheckin.dto.CheckInDto;
import com.casestudy.flightcheckin.model.CheckIn;
import com.casestudy.flightcheckin.repository.CheckInRepository;

@SpringBootTest
public class FlightCheckInTest {

	@Autowired
    CheckInController checkInController;

    @Autowired
    CheckInRepository checkInRepository;
    
    @Test
    public void addReferenceId() {
    	checkInRepository.deleteAll();
        System.out.println("Number of docs: " + checkInRepository.count());
        try {
        	CheckInDto checkin = null;
        	checkInController.addReferenceId(checkin);
        	//checkInController.addMoreFlight(checkin);
        } catch (Exception e) {
            System.out.println(e);
        }

        for (CheckIn checkIn : checkInRepository.findAll()) {
            System.out.println("AFTER we start the service: " + checkIn);
        }
        System.out.println("Number of docs: " + checkInRepository.count());
    }

}
