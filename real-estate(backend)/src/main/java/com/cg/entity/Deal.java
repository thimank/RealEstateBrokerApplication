package com.cg.entity;

import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToOne;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
public class Deal {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int dealId;
	private LocalDate dealDate;
	private double dealCost;

	@OneToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "user_id")
	private Customer customer;

	@OneToOne
	@JoinColumn(name = "property_id", referencedColumnName = "propId")
	private Property property;

	public Deal() {
		super();
	}

	public Deal(int dealId, LocalDate dealDate, double dealCost, Customer customer, Property property) {
		super();
		this.dealId = dealId;
		this.dealDate = dealDate;
		this.dealCost = dealCost;
		this.customer = customer;
		this.property = property;
	}

	public int getDealId() {
		return dealId;
	}

	public void setDealId(int dealId) {
		this.dealId = dealId;
	}

	public LocalDate getDealDate() {
		return dealDate;
	}

	public void setDealDate(LocalDate dealDate) {
		this.dealDate = dealDate;
	}

	public double getDealCost() {
		return dealCost;
	}

	public void setDealCost(double dealCost) {
		this.dealCost = dealCost;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}
}
