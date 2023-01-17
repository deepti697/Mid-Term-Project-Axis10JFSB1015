package com.axis.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

	User findUserByEmail(String email);

}
