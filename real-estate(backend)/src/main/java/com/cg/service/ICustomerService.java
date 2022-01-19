package com.cg.service;

import java.util.List;

import com.cg.entity.Customer;
import com.cg.entity.Property;
import com.cg.exception.CustomerNotFoundException;

public interface ICustomerService {
	
	public Customer addCustomer(Customer customer);

	public Customer editCustomer(Customer customer);

	public Customer removeCustomer(int custId) throws CustomerNotFoundException;

	public Customer viewCustomer(int custId);

	public List<Customer> listAllCustomers();
	
	List<Property> listAllProperties(int custId);
}
