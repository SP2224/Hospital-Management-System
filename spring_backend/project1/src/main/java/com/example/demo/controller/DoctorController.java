package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.DoctorException;
import com.example.demo.model.DoctorModel;
import com.example.demo.repository.DoctorRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class DoctorController {
	@Autowired
	private DoctorRepo DoctorRepo;
	
	//get all doctors by rest api
	@GetMapping("/doc_info")
	
	public List<DoctorModel> getAllDoctors(){
		return DoctorRepo.findAll();
	}
	
	// create doctor rest api
		@PostMapping("/doc_info")
		public DoctorModel createEmployee(@RequestBody DoctorModel doctor) {
			return DoctorRepo.save(doctor);
		}
		
		// get doctor by id rest api
		@GetMapping("/doc_info/{id}")
		public ResponseEntity<DoctorModel> getEmployeeById(@PathVariable Long id) {
			DoctorModel doctor = DoctorRepo.findById(id)
					.orElseThrow(() -> new DoctorException("Doctor not exist with id :" + id));
			return ResponseEntity.ok(doctor);
		}
}
