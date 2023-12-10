package com.casestudy.flightsearch;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.retry.annotation.EnableRetry;



@SpringBootApplication
@EnableRetry
public class FlightsearchApplication{
	
	
	

	public static void main(String[] args) {
		SpringApplication.run(FlightsearchApplication.class, args);
	}
	
	
}
