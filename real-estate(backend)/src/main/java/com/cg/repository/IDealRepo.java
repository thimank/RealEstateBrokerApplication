package com.cg.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.entity.Deal;

public interface IDealRepo extends JpaRepository<Deal,Integer>{

}
