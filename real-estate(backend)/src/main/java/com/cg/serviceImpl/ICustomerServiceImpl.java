package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Customer;
import com.cg.entity.Deal;
import com.cg.entity.Property;
import com.cg.exception.CustomerNotFoundException;
import com.cg.repository.ICustomerRepo;
import com.cg.repository.IDealRepo;
import com.cg.service.ICustomerService;

@Service
public class ICustomerServiceImpl implements ICustomerService{

	@Autowired
	ICustomerRepo customerRepo;

	@Autowired
	IDealRepo dealRepo;

	//Service method for adding new Customer in the Repository
	@Override
	public Customer addCustomer(Customer customer) {
		customerRepo.save(customer);
		return customer;
	}

	//Service method for updating Customer details in the Repository
	@Override
	public Customer editCustomer(Customer customer) {
		Optional<Customer> opt=customerRepo.findById(customer.getUserid());
		if(opt.isPresent()==false) {
			customer.setRole("Customer");
			throw new CustomerNotFoundException("Customer Not Found");
		}
		customerRepo.save(customer);
		return customer;
	}

	//Service method for removing customer by given Id from the Repository
	@Override
	public Customer removeCustomer(int custId) throws CustomerNotFoundException {
		Customer c = customerRepo.findById(custId).get();
		Optional<Customer> opt=customerRepo.findById(custId);
		if(opt.isPresent()==false) {
			throw new CustomerNotFoundException("Customer Not Found");
		}
		List<Deal> allDeals= dealRepo.findAll();
		for(Deal deal:allDeals) {
			if(deal.getCustomer().getUserid()==custId)
				dealRepo.delete(deal);
		}
		customerRepo.deleteById(custId);;
		return c;
	}

	//Service method for displaying customer details based on Id from Repository
	@Override
	public Customer viewCustomer(int custId) throws CustomerNotFoundException {
		Optional<Customer> opt=customerRepo.findById(custId);
		if(opt.isPresent()==false) {
			throw new CustomerNotFoundException("Customer Not Found");
		}
		return customerRepo.findById(custId).get();
	}

	//Service methods for displaying all customer from Repository
	@Override
	public List<Customer> listAllCustomers() {
		List<Customer> customers=customerRepo.findAll();
		return customers;
	}

	//Service method to display the Property that customer has from the Repository
	@Override
	public List<Property> listAllProperties(int custId) {
		Optional<Customer> opt=customerRepo.findById(custId);
		if(opt.isPresent()==false) {
			throw new CustomerNotFoundException("Customer Not Found");
		}
		return customerRepo.findById(custId).get().getProperties();
	}
}
