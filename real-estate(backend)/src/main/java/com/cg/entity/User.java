package com.cg.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name="user1")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	private String password;
	private String role;
	
	@Column(unique = true,length=10)
	private String mobile;
	
	@Column(unique = true)
	private String email;
	
	private String city;

	//No Argument Constructor
	public User() {
		super();
	}	

	//Parameterized Constructor
	public User(int userid, String password, String role, String mobile, String email, String city) {
		super();
		this.userId = userid;
		this.password = password;
		this.role = role;
		this.mobile = mobile;
		this.email = email;
		this.city = city;
	}

	//Getter and Setter Method
	public int getUserid() {
		return userId;
	}
	public void setUserid(int userid) {
		this.userId = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
}