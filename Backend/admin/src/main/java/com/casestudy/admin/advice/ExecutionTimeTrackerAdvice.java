package com.casestudy.admin.advice;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class ExecutionTimeTrackerAdvice {
	
	//Logger logger=LoggerFactory.getLogger(ExecutionTimeTrackerAdvice.class);
	
	@Around("@annotation(com.casestudy.admin.advice.TrackExecutionTime)")
	public Object trackTime(ProceedingJoinPoint pjp) throws Throwable {
		long startTime=System.currentTimeMillis();
		Object obj=pjp.proceed();
		long endTime=System.currentTimeMillis();
		//log.info("Method name"+pjp.getSignature()+" time taken to execute : "+(endTime-stratTime));
		log.info("time taken to execute : "+(endTime-startTime));
		return obj;
	}
	
}