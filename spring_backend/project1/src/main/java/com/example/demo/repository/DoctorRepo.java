package com.example.demo.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.DoctorModel;

@Repository
public interface DoctorRepo extends JpaRepository<DoctorModel,Long>{

}
