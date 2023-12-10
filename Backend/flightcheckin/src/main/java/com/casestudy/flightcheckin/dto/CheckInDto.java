package com.casestudy.flightcheckin.dto;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class CheckInDto {
	
	
	@Id
	private Integer _id;
	private Integer flight_id;               // flight id
	private String firstName;
	private String lastName;
	private String email;              
	private Long phone;
	private String gender;
	private Integer quantity;

}
