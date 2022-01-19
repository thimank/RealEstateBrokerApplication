package com.cg.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.cg.entity.Property;
import com.cg.pojo.PropertyCriteria;

public interface IPropertyRepo extends JpaRepository<Property,Integer>{
	
	
}
