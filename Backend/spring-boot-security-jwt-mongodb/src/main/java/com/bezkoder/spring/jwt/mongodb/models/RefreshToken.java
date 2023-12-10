package com.bezkoder.spring.jwt.mongodb.models;


import java.time.Instant;

//import javax.persistence.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "refreshtoken")
public class RefreshToken {
	
  @Id
  //@GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

 // @OneToOne
//  @JoinColumn(name = "user_id", referencedColumnName = "id")
  
  @DBRef
  private User user;

 // @Column(nullable = false, unique = true)
  private String token;

 // @Column(nullable = false)
  private Instant expiryDate;

  public RefreshToken() {
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public Instant getExpiryDate() {
    return expiryDate;
  }

  public void setExpiryDate(Instant expiryDate) {
    this.expiryDate = expiryDate;
  }

}