/*package com.casestudy.flightsearch.model;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;

@ApiModel(description="Flight Details")
@Document(collection="FlightModel")
public class Flight {
	
	@Id
	private Integer id;
	private String flight_name;
	private String flight_no;
	private String departure_city;
	private String arrival_city;
	//private Date Departure_Date;
	private String departure_date;
	private String departure_time;
	private long fare;
	
	
	
	
	public Flight(Integer id, String flight_name, String flight_no, String departure_city, String arrival_city,
			String departure_date, String departure_time, long fare) {
		super();
		this.id = id;
		this.flight_name = flight_name;
		this.flight_no = flight_no;
		this.departure_city = departure_city;
		this.arrival_city = arrival_city;
		this.departure_date = departure_date;
		this.departure_time = departure_time;
		this.fare = fare;
	}




	public Integer getId() {
		return id;
	}




	public void setId(Integer id) {
		this.id = id;
	}




	public String getFlight_name() {
		return flight_name;
	}




	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}




	public String getFlight_no() {
		return flight_no;
	}




	public void setFlight_no(String flight_no) {
		this.flight_no = flight_no;
	}




	public String getDeparture_city() {
		return departure_city;
	}




	public void setDeparture_city(String departure_city) {
		this.departure_city = departure_city;
	}




	public String getArrival_city() {
		return arrival_city;
	}




	public void setArrival_city(String arrival_city) {
		this.arrival_city = arrival_city;
	}




	public String getDeparture_date() {
		return departure_date;
	}




	public void setDeparture_date(String departure_date) {
		this.departure_date = departure_date;
	}




	public String getDeparture_time() {
		return departure_time;
	}




	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}




	public long getFare() {
		return fare;
	}




	public void setFare(long fare) {
		this.fare = fare;
	}




	public Flight() {
		
	}



}
*/

package com.casestudy.admin.model;

import java.sql.Timestamp;
import java.util.Date;



//import io.swagger.annotations.ApiModel;

//@ApiModel(description="Flight Details")
//@Document(collection="FlightModel")
public class Flight {
	
	
	private Integer flight_id;
	private String flight_name;
	private String flight_no;
	
	private String departure_city;
	 
	private String arrival_city;
	//private Date Departure_Date;
	 
	private String departure_date;
	private String departure_time;
	private long fare;
	
	
	
	
	public Flight(Integer flight_id, String flight_name, String flight_no, String departure_city, String arrival_city,
			String departure_date, String departure_time, long fare) {
		super();
		this.flight_id = flight_id;
		this.flight_name = flight_name;
		this.flight_no = flight_no;
		this.departure_city = departure_city;
		this.arrival_city = arrival_city;
		this.departure_date = departure_date;
		this.departure_time = departure_time;
		this.fare = fare;
	}


public Flight() {
		
	}




	public Integer getFlight_id() {
		return flight_id;
	}


	public void setFlight_id(Integer flight_id) {
		this.flight_id = flight_id;
	}


	public String getFlight_name() {
		return flight_name;
	}




	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}




	public String getFlight_no() {
		return flight_no;
	}




	public void setFlight_no(String flight_no) {
		this.flight_no = flight_no;
	}




	public String getDeparture_city() {
		return departure_city;
	}




	public void setDeparture_city(String departure_city) {
		this.departure_city = departure_city;
	}




	public String getArrival_city() {
		return arrival_city;
	}




	public void setArrival_city(String arrival_city) {
		this.arrival_city = arrival_city;
	}




	public String getDeparture_date() {
		return departure_date;
	}




	public void setDeparture_date(String departure_date) {
		this.departure_date = departure_date;
	}




	public String getDeparture_time() {
		return departure_time;
	}




	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}




	public long getFare() {
		return fare;
	}




	public void setFare(long fare) {
		this.fare = fare;
	}




	



}
