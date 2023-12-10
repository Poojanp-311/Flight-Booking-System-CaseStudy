package com.bezkoder.spring.jwt.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bezkoder.spring.jwt.mongodb.models.ERole;
import com.bezkoder.spring.jwt.mongodb.models.Role;

/*public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}*/

@Repository
public interface RoleRepository extends MongoRepository<Role, Long> {
	  Optional<Role> findByName(ERole name);
	}