package com.cg.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cg.entity.Customer;

public interface ICustomerRepo extends JpaRepository<Customer,Integer>{
	

}
