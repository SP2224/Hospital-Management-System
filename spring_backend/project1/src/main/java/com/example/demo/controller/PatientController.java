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
import com.example.demo.exception.PatientException;
import com.example.demo.model.DoctorModel;
import com.example.demo.model.PatientModel;
import com.example.demo.repository.PatientRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class PatientController {
	@Autowired
	private PatientRepo PatientRepo;
	
	//get all patients
	@GetMapping("/patients_info")
	public List<PatientModel> getAllPatients(){
		return PatientRepo.findAll();
	}

	@PostMapping("/patients_info")
	public PatientModel addpatient(@RequestBody PatientModel patient) {
		return PatientRepo.save(patient);
	}
	@GetMapping("/patients_info/{id}")
	public ResponseEntity<PatientModel> getPatientById(@PathVariable Long id) {
		PatientModel patient = PatientRepo.findById(id)
				.orElseThrow(() -> new PatientException("Patient not exist with id :" + id));
		return ResponseEntity.ok(patient);
	}
	
	
}
