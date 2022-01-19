package com.cg.entity;


import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Customer extends User{
	
	//class members
	private String custName;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "custId")
	private List<Property> properties;
	
	// No Arugument Constructor
	public Customer(){ 
		super(); 
		}
	
	//Parameterized Constructor
	public Customer(String custName, List<Property> properties) {
		super();
		this.custName = custName;
		this.properties = properties;
	}

	//Getter and Setter Method
	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public List<Property> getProperties() {
		return properties;
	}

	public void setProperties(List<Property> properties) {
		this.properties = properties;
	}
}
