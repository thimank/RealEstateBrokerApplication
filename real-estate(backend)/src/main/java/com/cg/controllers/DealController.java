package com.cg.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.cg.entity.Deal;
import com.cg.serviceImpl.IDealServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:3000")
@RestController
public class DealController {

	@Autowired
	IDealServiceImpl dealServiceImpl;
	
	//Controller method to add new deal
	@PostMapping("/addDeal")
	public String addDeal(@RequestBody Deal deal) {
		return dealServiceImpl.addDeal(deal);
	} 
	
	//Controller method to list the Customer who has deal 
	@GetMapping("/allDeals")
	public List<Deal> getAllCustomer() {
       return dealServiceImpl.listAllDeals();
   }
}
