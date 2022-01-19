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
import com.cg.entity.Property;
import com.cg.exception.PropertyNotFoundException;
import com.cg.pojo.PropertyCriteria;
import com.cg.service.IPropertyService;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:3000")
@RestController
public class PropertyController {

	@Autowired
	private IPropertyService propertyService;
	
	//Controller method to display the list of properties
	@GetMapping("/allProperties")
	public List<Property> listAllTheProperties() {
		return propertyService.listAllProperties();
	}

	//Controller method to add new property details
	@PostMapping("/addProperty")
	public Property saveOneProperty(@RequestBody Property property) {
		return propertyService.addProperty(property);
	}

	//Controller method for updating the property detail 
	@PutMapping("/editProperty")
	public Property editPropertyDetails(@RequestBody Property property) {
		return propertyService.editProperty(property);
	}

	//Controller method for displaying the property details based on id 
	@GetMapping("/viewProperty/{propId}")
	public Property viewProperty(@PathVariable int propId) {
		return propertyService.viewProperty(propId);
	}
	
	//Controller method for removing the property by given id
	@DeleteMapping("/removeProperty/{propId}")
	public String deletePropertyByPropId(@PathVariable int propId) {
		return propertyService.removeProperty(propId);
	}
	@GetMapping("/availableProperty")
	public List<Property> listProperties() {
		return propertyService.availableProperties();
	}

	//Controller method to display the property criteria details
	@PostMapping("/criteria")
	public List<Property> listPropertyByCriteria(@RequestBody PropertyCriteria criteria) throws PropertyNotFoundException {
		List<Property> properties= propertyService.listPropertyByCriteria(criteria);
		if(properties.isEmpty()) {
			throw new PropertyNotFoundException("No Property found with given criteria");
		}
		return properties;
	}
}