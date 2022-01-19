package com.cg.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entity.Customer;
import com.cg.entity.Property;
import com.cg.exception.CustomerNotFoundException;
import com.cg.serviceImpl.ICustomerServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	ICustomerServiceImpl customerService;
	
	//Controller method for adding new Customer
	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer){
		return customerService.addCustomer(customer);
	}	
	
	//Controller method for deleting Customer by given id
	@DeleteMapping("/deleteCustomer/{Id}")
	public Customer deleteCustomer(@PathVariable Integer Id) throws CustomerNotFoundException {
		return customerService.removeCustomer(Id);
	}
	
	//Controller method for displaying Customer details based on Id 
	@GetMapping("/viewCustomer/{Id}")
	 public Customer viewCustomer(@PathVariable Integer Id) throws CustomerNotFoundException {
       		return customerService.viewCustomer(Id);
   	}
	
	//Controller method to display all Customer 
	@GetMapping("/allCustomers")
	 public List<Customer> getAllCustomer() {
        	return customerService.listAllCustomers();
    	}
	
	//Controller method to update Customer details
	@PutMapping("/updateCustomer")
	public Customer editCustomer(@RequestBody Customer customer) {
		return customerService.editCustomer(customer);
	}
	
	//Controller method to list the property owned by Customer by their id
	@GetMapping("/customerProperties/{custId}")
	public List<Property> getAllProperties(@PathVariable int custId){
		return customerService.listAllProperties(custId);
	}
}
