package com.cg.service;

import java.util.List;

import com.cg.entity.Customer;
import com.cg.entity.User;

public interface IUserService {

	String login(User user);

	List<User> getAllUsers();

	User getUserById(int userId);
	
	User addUser(User user);
}
