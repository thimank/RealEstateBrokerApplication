package com.cg.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;

@Entity
public class Broker extends User{
	
	//Class Members
	private String broName;
	@OneToMany(targetEntity = Property.class,cascade = CascadeType.ALL)
	private List<Property> properties;
	 
	//No argument Constructor
	public Broker() {
		super();
	}
	
	//Parameterized Constructor
	public Broker( String broName, List<Property> properties) {
		super();
		this.broName = broName;
		this.properties = properties;
	}
	
	//Getter and Setter Methods for the Broker Class
	
	public String getBroName() {
		return broName;
	}

	public void setBroName(String broName) {
		this.broName = broName;
	}

	public List<Property> getProperties() {
		return properties;
	}

	public void setProperties(List<Property> properties) {
		this.properties = properties;
	}
	
}
