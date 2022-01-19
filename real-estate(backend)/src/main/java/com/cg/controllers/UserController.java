package com.cg.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entity.User;
import com.cg.serviceImpl.IUserServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	IUserServiceImpl userService;
	
	//Controller method for login
	@PostMapping("/login")
	public String access(@RequestBody User user) {
		return userService.login(user);
	}

	//Controller method to display all users
	@GetMapping("/allUsers")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	//Controller method for displaying user details by their id 
	@GetMapping("/user/{userId}")
	public User getUserById(@PathVariable int userId) {
		return userService.getUserById(userId);
	}
	
	@PutMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
}
