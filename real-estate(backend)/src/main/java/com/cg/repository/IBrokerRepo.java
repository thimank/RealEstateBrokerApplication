package com.cg.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.entity.Broker;

public interface IBrokerRepo extends JpaRepository<Broker,Integer>{
	
}
