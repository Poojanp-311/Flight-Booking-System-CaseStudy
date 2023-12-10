/*package com.casestudy.flightsearch;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.casestudy.flightsearch.model.FlightSearchModel;


public class FlightSearchTest {
	
	private static final Logger logger = LoggerFactory.getLogger(FlightSearchTest.class);

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	public void getSearchingByValidId_OK() {

		String searchId = "101";

		ResponseEntity<FlightSearchModel> bookingResponse = restTemplate.getForEntity(ApiUrls.BookingURL + searchId,
				FlightSearchModel.class);

		Assertions.assertThat(bookingResponse.getStatusCode()).isEqualTo(HttpStatus.OK);
		Assertions.assertThat(bookingResponse.getBody()).isNotNull();
		Assertions.assertThat(bookingResponse.getBody().getId()).isEqualTo(searchId);
		Assertions.assertThat(bookingResponse.getBody().getFlights()).isNotNull();
		Assertions.assertThat(bookingResponse.getBody().getFlights().size()).isGreaterThan(0);

		logger.info("\n=============================\n\n");
		logger.info(">>>>>>>>>>>>>>>>>>>>Response = " + bookingResponse.getBody());
		logger.info("\n\n=============================\n");

	}

	@Test
	public void getBookingByInValidId_NOT_FOUND() {

		String searchId = "FB-100";

		ResponseEntity<String> bookingResponse = restTemplate.getForEntity(ApiUrls.BookingURL + searchId,
				String.class);

		Assertions.assertThat(bookingResponse.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);

		logger.info("\n=============================\n\n");
		logger.info(">>>>>>>>>>>>>>>>>>>>Response = " + bookingResponse.getBody());
		logger.info("\n\n=============================\n");

	}

}
*/
