package com.casestudy.flightbooking;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.casestudy.flightbooking.controller.FlightPassengerController;
import com.casestudy.flightbooking.model.Passenger;
import com.casestudy.flightbooking.repository.PassengerRepository;

import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootTest
class FlightbookingApplicationTests {

	@Autowired
	private FlightPassengerController flightPassengerController;
	
	@MockBean
	private PassengerRepository passengerRepository;
	
	@Test
	public void getBookingTest() {
		//int booking_id=1;
		when(passengerRepository.findAll()).
		thenReturn(Stream.of(new Passenger(1,101,"pooja", "palekar","pooja62@gmail.com",(long) 1236598740,"female", 7))
				.collect(Collectors.toList()));
		//assertEquals(1, flightPassengerController.getAllPassengers().size());
	}

}
