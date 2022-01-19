package com.cg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.entity.User;

public interface IUserRepo extends JpaRepository<User,Integer>{
	
	public User findByEmail(String email);
	
}
