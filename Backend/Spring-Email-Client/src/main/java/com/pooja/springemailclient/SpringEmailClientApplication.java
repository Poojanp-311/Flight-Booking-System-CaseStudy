package com.pooja.springemailclient;

import java.util.Date;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.EnableScheduling;




@SpringBootApplication
@EnableScheduling
public class SpringEmailClientApplication {

	
	@Autowired
	private EmailSenderService service;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringEmailClientApplication.class, args);
	}

	
	@EventListener(ApplicationReadyEvent.class)
	public void triggerMail() throws MessagingException {
		
		
		service.sendEmail();
		service.sendEmailwithAttachment();	

	}
	
	
	
}

