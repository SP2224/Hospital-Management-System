package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.DoctorModel;
import com.example.demo.model.PatientModel;
import com.example.demo.repository.DoctorRepo;
import com.example.demo.repository.PatientRepo;

@SpringBootTest
class Project1ApplicationTests {
	@Autowired
	DoctorRepo dRepo;
	@Autowired
	PatientRepo pRepo;
	
	@Test
	void contextLoads() {
	}
	
	
	//Testing of Doc Controller
	@Test
	public void testReadAllFromDocList() {
		List<DoctorModel> list = dRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	@Test
	public void testEachDocById(){
		DoctorModel doc = dRepo.findById(5L).get();
		assertEquals(5,doc.getId());
	}
	//Testing of Patient Controller
	@Test
	public void testReadAllFromPatientList() {
		List<PatientModel> list = pRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	@Test
	public void addPatientToList() throws ParseException{
		PatientModel pmod = new PatientModel();
		pmod.setId(140);
		pmod.setName("Nikitha");
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		pmod.setDov(formatter.parse("09-09-2001"));
		pmod.setVisited_doc("satya");
		pmod.setPrescription("Prescribed Successfully");
		pRepo.save(pmod);
		assertNotNull(pRepo.findById(140L).get());
		
		
		
	}
	

}
