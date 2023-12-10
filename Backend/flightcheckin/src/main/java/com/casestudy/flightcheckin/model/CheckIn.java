package com.casestudy.flightcheckin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="PassengerModel")
public class CheckIn {
	
	@Id
	private Integer _id;
	private Integer flight_id;               // flight id
	private String firstName;
	private String lastName;
	private String email;              // how do I apply unique key to email
	private Long phone;
	private String gender;
	private Integer quantity;
	
	
	
	

	public CheckIn(Integer _id, Integer flight_id, String firstName, String lastName, String email, Long phone,
			String gender, Integer quantity) {
		super();
		this._id = _id;
		this.flight_id = flight_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
		this.quantity=quantity;
	}


	public CheckIn() {
		super();
	}


	public Integer get_id() {
		return _id;
	}

	public void set_id(Integer _id) {
		this._id = _id;
	}


	

	public Integer getFlight_id() {
		return flight_id;
	}


	public void setFlight_id(Integer flight_id) {
		this.flight_id = flight_id;
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

	

	public Integer getQuantity() {
		return quantity;
	}


	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "CheckIn [_id=" + _id + ", flight_id=" + flight_id + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", phone=" + phone + ", gender=" + gender + ", quantity=" + quantity
				+ "]";
	}


	

}






/*package com.casestudy.flightcheckin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="CheckInModel")
public class CheckIn {
	
	@Id
	private Integer id;              // booking id
	//private Integer flight_id;               // flight id
	private String firstName;
	private String lastName;
	private String email;              // how do I apply unique key to email
	private Long phone;
	private String gender;
	
	
	
	

	public CheckIn(Integer id, Integer flight_id String firstName, String lastName, String email, Long phone,
			String gender) {
		super();
		this.id = id;
		//this.flight_id = flight_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.gender = gender;
	}


	public CheckIn() {
		super();
	}


	


	
	
	


	public Integer getid() {
		return id;
	}


	public void id(Integer _id) {
		this.id = id;
	}


	public Integer getFlight_id() {
		return flight_id;
	}


	public void setFlight_id(Integer flight_id) {
		this.flight_id = flight_id;
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
		return "CheckIn [id=" + id + ", flight_id=" + flight_id + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", email=" + email + ", phone=" + phone + ", gender=" + gender + "]";
	}


	


}

*/


