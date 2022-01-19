package com.cg.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Broker;
import com.cg.entity.Property;
import com.cg.exception.BrokerNotFoundException;
import com.cg.repository.IBrokerRepo;
import com.cg.service.IBrokerService;

@Service
public class IBrokerServiceImpl implements IBrokerService {

	@Autowired
	public IBrokerRepo iBrokerRepo;

	//Service method for adding new Broker in the Repository
	@Override
	public Broker addBroker(Broker bro) {
		bro.setRole("Broker");
		return iBrokerRepo.save(bro);
	}

	//Service method for updating Broker details in the Repository
	@Override
	public Broker editBroker(Broker bro) throws BrokerNotFoundException {
		Optional<Broker> opt = iBrokerRepo.findById(bro.getUserid());
		if(opt.isPresent()) {
			bro.setRole("Broker");
			return	iBrokerRepo.save(bro);
		}
		else {
			throw new BrokerNotFoundException("Broker not found");
		}
	}

	//Service method for removing broker by given Id from the Repository
	@Override
	public Broker removeBroker(int broId) throws BrokerNotFoundException {
		Optional<Broker> opt = iBrokerRepo.findById(broId);
		if(opt.isPresent()) {
			Broker bro = iBrokerRepo.findById(broId).get();
			iBrokerRepo.deleteById(broId);
			return bro;
		}
		else {
			throw new BrokerNotFoundException("Broker not found");
		}
	}

	//Service method for displaying broker details based on Id from Repository
	@Override
	public Broker viewBroker(int broId) throws BrokerNotFoundException {
		Optional<Broker> opt = iBrokerRepo.findById(broId);
		if(opt.isPresent()) {
			return iBrokerRepo.getById(broId);
		}
		else {
			throw new BrokerNotFoundException("Broker not found");
		}
	}

	//Controller methods for displaying all Brokers from Repository
	@Override
	public List<Broker> listAllBrokers() {
		return iBrokerRepo.findAll();
	}

	//Controller method to display the Property that broker has from the Repository
	@Override
	public List<Property> listAllProperties(int broid) {
		return iBrokerRepo.findById(broid).get().getProperties();
	}

}
