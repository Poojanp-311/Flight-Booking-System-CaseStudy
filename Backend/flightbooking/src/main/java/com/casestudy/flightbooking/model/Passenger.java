
/*package com.casestudy.flightbooking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="PassengerModel")
public class Passenger {
	
	@Transient
    public static final String SEQUENCE_NAME = "user_sequence";

	@Id
	private Integer id;
	private Integer flight_id;               // flight id
	private String firstName;
	private String lastName;
	private String email;              // how do I apply unique key to email
	private Long phone;
	private String gender;
	
	
	
	
	


	public Passenger(Integer id, Integer flight_id, String firstName, String lastName, String email, Long phone,
			String gender) {
		super();
		this.id = id;
		this.flight_id = flight_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
	}

	

	
	public Integer getFlight_id() {
		return flight_id;
	}




	public void setFlight_id(Integer flight_id) {
		this.flight_id = flight_id;
	}




	public Passenger() {
		super();
	}



	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}




	@Override
	public String toString() {
		return "Passenger [id=" + id + ", flight_id=" + flight_id + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", phone=" + phone + ", gender=" + gender + "]";
	}

	
	}
	*/
	


package com.casestudy.flightbooking.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;

@ApiModel(description="Flight Details")
@Document(collection="PassengerModel")
public class Passenger {
	
	@Transient
    public static final String SEQUENCE_NAME = "user_sequence";

	@Id
	private Integer id;
	public Integer flight_id;               // flight id
	@NotBlank
	private String firstName;
	@NotBlank
	private String lastName;
	@Email
	private String email;              
	@NotBlank
	private Long phone;
	private String gender;
	private Integer quantity;
	
	
	
	



	public Passenger(Integer id, Integer flight_id, String firstName, String lastName, String email, Long phone,
			String gender, Integer quantity) {
		super();
		this.id = id;
		this.flight_id = flight_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
		this.quantity=quantity;
	}

	

	
	



	/*public Passenger(Integer id, String firstName, String lastName, String email, Long phone, String gender) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
	}*/

	public Passenger() {
		super();
	}


	public Integer getFlight_id() {
		return flight_id;
	}



	public void setFlight_id(Integer flight_id) {
		this.flight_id = flight_id;
	}




	


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	


	/*@Override
	public String toString() {
		return "Passenger [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", phone=" + phone + ", gender=" + gender + "]";
	}*/




	public Integer getQuantity() {
		return quantity;
	}








	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}








	@Override
	public String toString() {
		return "Passenger [id=" + id + ", flight_id=" + flight_id + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", phone=" + phone + ", gender=" + gender + ", quantity=" + quantity
				+ "]";
	}








	
	
	

	
	}
