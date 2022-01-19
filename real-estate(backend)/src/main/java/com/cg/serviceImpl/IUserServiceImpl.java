package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.User;
import com.cg.exception.BrokerNotFoundException;
import com.cg.exception.UserNotFoundException;
import com.cg.repository.IUserRepo;
import com.cg.service.IUserService;

@Service
public class IUserServiceImpl implements IUserService{

	@Autowired
	IUserRepo userRepo;

	//Service method for user login
	@Override
	public String login(User user) {
		String status= "false";
		Optional<User> opt= userRepo.findById(user.getUserid());
		if (opt.isPresent()) {
			if((opt.get().getPassword().equals(user.getPassword()))) 
			{
				status="true";
			} 
			else  throw new UserNotFoundException("User Not Found");
		}
		return status;
	}

	//Service method to list all users from repository
	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	//Service method for displaying user by their id
	@Override
	public User getUserById(int userId) {
		Optional<User> opt=userRepo.findById(userId);
		if(opt.isPresent()) {
			return userRepo.findById(userId).get();
		}
		else {
			throw new BrokerNotFoundException("Broker not found");
		}
	}

	@Override
	public User addUser(User user) {
		userRepo.save(user);
		return user;
	}
}
