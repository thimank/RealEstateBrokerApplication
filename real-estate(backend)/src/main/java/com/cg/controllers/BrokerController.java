package com.cg.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cg.entity.Broker;
import com.cg.exception.BrokerNotFoundException;
import com.cg.service.IBrokerService;
import com.cg.serviceImpl.IBrokerServiceImpl;

@CrossOrigin("http://localhost:3000")
@RestController
public class BrokerController {

	@Autowired
	private IBrokerServiceImpl iBrokerService;

	//Controller method for adding new Broker
	@PostMapping("/addBroker")
	public Broker addBroker(@RequestBody Broker bro) {
		return iBrokerService.addBroker(bro);
	}
	
	//Controller method for updating Broker details
	@PutMapping("/editBroker")
	public Broker editBroker(@RequestBody Broker bro) throws BrokerNotFoundException {
		return iBrokerService.editBroker(bro);
	}
	
	//Controller method for removing broker by given Id 
	@DeleteMapping("/removeBroker/{broId}")
	public Broker removeBroker(@PathVariable int broId) throws BrokerNotFoundException {
		return iBrokerService.removeBroker(broId);
	}
	
	//Controller method for displaying broker details based on Id
	@GetMapping("/viewBroker/{broId}")
	public Broker viewBroker(@PathVariable int broId) throws BrokerNotFoundException {
		return iBrokerService.viewBroker(broId);
	}
	
	//Controller methods for displaying all Brokers
	@GetMapping("/allBrokers")
	public List<Broker> listAllBrokers() {
		return iBrokerService.listAllBrokers();
	}
	
	//Controller method to display the Property that broker has
	@GetMapping("/BrokerProperties/{broId}")
	public List<Broker> listAllBrokerProperties() {
		return iBrokerService.listAllBrokers();
	}
}
