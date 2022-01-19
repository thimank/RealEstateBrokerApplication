package com.cg.serviceImpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.entity.Customer;
import com.cg.entity.Deal;
import com.cg.entity.Property;
import com.cg.repository.ICustomerRepo;
import com.cg.repository.IDealRepo;
import com.cg.repository.IPropertyRepo;
import com.cg.service.IDealService;

@Service
public class IDealServiceImpl implements IDealService {

	@Autowired
	IDealRepo dealRepo;
	@Autowired
	ICustomerRepo customerRepo;
	@Autowired
	IPropertyRepo propertyRepo;

	//Service method for adding new deal in the Repository
	@Override
	public String addDeal(Deal deal) {
		Property property = propertyRepo.findById(deal.getProperty().getPropId()).get();
		Customer customer = customerRepo.findById(deal.getCustomer().getUserid()).get();
		String dealStatus="Unsuccessful Deal";

		if (property.getStatus() == true) {
			property.setStatus(false);
			deal.setDealDate(LocalDate.now());
			propertyRepo.saveAndFlush(property);

			List<Property> custProperties = customer.getProperties();
			custProperties.add(property);
			customer.setProperties(custProperties);
			customerRepo.saveAndFlush(customer);
			dealRepo.saveAndFlush(deal);
			dealStatus="Deal is Successful";
		}
		return dealStatus;
	}

	//Service method for displaying all deals from Repository
	@Override
	public List<Deal> listAllDeals() {
		return dealRepo.findAll();
	}
}
