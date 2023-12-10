/*package com.casestudy.flightsearch;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.when;

import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;

import com.casestudy.flightsearch.controller.FlightController;
import com.casestudy.flightsearch.model.Flight;
import com.casestudy.flightsearch.repository.FlightRepository;


//@RunWith(SpringRunner.class)
@SpringBootTest
class FlightsearchApplicationTests {

	@Autowired
	private FlightController flightController;
	
	@MockBean
	private FlightRepository flightRepository;

	@Test
	public void getTestdone() {
		when(flightRepository.findAll()).thenReturn(Stream.of(new Flight(105,"B256","JetAir","NYC","SFO","20-08-2021","4am",4000), 
						new Flight(102,"C256","SpiceJet","Austin","Chicago","21-09-2021","8am",2000))
				.collect(Collectors.toList()));
		assertEquals(2, flightController.getAllFlights().size());
	}

	@Test
	public void getFlightTest() {
		String departure_city = "Austin";
		String arrival_city = "Chicago";
		String departure_date = "21-09-2021";
		when(flightController.getFlights(departure_city, arrival_city, departure_date))
		.thenReturn(Stream.of(new Flight(102,"C256","SpiceJet","Austin","Chicago","21-09-2021","8am",2000))
				.collect(Collectors.toList()));
		assertEquals(1, flightController.getFlights(departure_city, arrival_city, departure_date).size());
	}
	
	@Test
	public void deleteTest()
	{
		flightRepository.deleteById(106);
		assertThat(flightRepository.existsById(106)).isFalse();
		
	}
}

*/
