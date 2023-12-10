package com.casestudy.flightcheckin.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.casestudy.flightcheckin.dto.CheckInDto;
import com.casestudy.flightcheckin.model.CheckIn;

@Mapper(componentModel="spring")
public interface CheckInMapper {
	
	CheckInDto toDto(CheckIn checkin);    // entity(sdo) to dto

    List<CheckInDto> toDtoList(List<CheckIn> checkin);          // entitylist to listdto

    CheckIn fromDto(CheckInDto checkinDto);   // dto to entity(sdo)

    List<CheckIn> fromDtoList(List<CheckInDto> checkinDtos);  // listdto to entitylist
}
