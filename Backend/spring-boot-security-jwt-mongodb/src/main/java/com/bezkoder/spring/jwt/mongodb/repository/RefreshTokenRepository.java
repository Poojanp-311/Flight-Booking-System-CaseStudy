package com.bezkoder.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.jwt.mongodb.models.RefreshToken;
import com.bezkoder.spring.jwt.mongodb.models.User;

@Repository
public interface RefreshTokenRepository extends MongoRepository<RefreshToken, Long> {

	Optional<RefreshToken> findByToken(String token);

	  //@Modifying
	  int deleteByUser(User user);

}
