package com.casestudy.flightsearch.model;

import java.util.List;

public class FlightSearchModel {
	
	private Integer id;
	private List<Flight> flights;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public List<Flight> getFlights() {
		return flights;
	}
	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}
	
	

}
