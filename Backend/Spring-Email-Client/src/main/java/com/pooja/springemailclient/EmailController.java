package com.pooja.springemailclient;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {
	
	@Autowired
	EmailSenderService emailService;

	
	  @GetMapping("/sendEmail") public String sendEmail() { return
	  emailService.sendEmail(); }
	 
	
	@GetMapping("/sendEmailwithAttachment")
	public String sendEmailwithAttachment() {
		return emailService.sendEmailwithAttachment();
	}
	
}
