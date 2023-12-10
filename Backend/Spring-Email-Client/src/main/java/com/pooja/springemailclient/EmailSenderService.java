package com.pooja.springemailclient;

import java.io.File;
import java.util.Date;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
public class EmailSenderService {
	
	@Autowired
	JavaMailSender javaMailSender;

	@Scheduled(cron = "* * * * * *", zone = "Asia/Kolkata")
	public String sendEmail() {
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setFrom("poojapalekar4@gmail.com");
		message.setTo("poojapalekar4@gmail.com");
		message.setSubject("From IndoAirLines: Booking has been confirmed");
		message.setText("Your Booking has been confirmed. Thank you for considering IndoAirlines for your journey. "
				+ "Happy Journey!! "
				+ "Stay Safe, Stay Happy :) "
				+ "Thanks & Regards "
				+ "IndoAirlines");
		
		javaMailSender.send(message);
		log.info("mail scheduled for every sec "+ new Date());
		
		
		return "Mail sent successfully";
	}
	
	
	public String sendEmailwithAttachment() {
		try {
			
			
			
			MimeMessage message = javaMailSender.createMimeMessage();
			
			MimeMessageHelper messageHelper = 
					new MimeMessageHelper(message, true);
			
			messageHelper.setFrom("poojapalekar4@gmail.com");
			messageHelper.setTo("poojapalekar4@gmail.com");
			messageHelper.addCc("anitapalekar4@gmail.com");
			messageHelper.setSubject("From IndoAirLines: Booking has been confirmed");
			messageHelper.setText("Your Booking has been confirmed. Thank you for considering IndoAirlines for your journey. "
					+ " Happy Journey!! "
					+ "Stay Safe, Stay Happy :) "
					+ " Thanks & Regards "
					+ "IndoAirlines");
			
			File file = new File("C:\\Users\\PONARAYA\\Documents\\CG_Training_Material\\IndoAirlines.jpg");
			
			messageHelper.addAttachment(file.getName(), file);
			
			
			javaMailSender.send(message);
			return "Mail sent successfully";
			
			
		} catch (Exception e) {
			return "Mail sent failed";
		}
	}
	
	
}