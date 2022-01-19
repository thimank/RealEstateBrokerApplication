package com.cg.service;

import java.util.List;

import com.cg.entity.Customer;
import com.cg.entity.Deal;
import com.cg.entity.Property;

public interface IDealService {

	public String addDeal(Deal deal);
	
	public List<Deal> listAllDeals();
}
