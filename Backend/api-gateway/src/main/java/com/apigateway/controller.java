package com.apigateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

	
	@GetMapping("/sayHi")
	public String sayHello() {
		
		
		return " Hello World";
	}
}
