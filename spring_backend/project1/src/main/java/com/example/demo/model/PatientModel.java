package com.example.demo.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "patients_info")
public class PatientModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "visited_doc")
	private String visited_doc;
	@Column(name = "dov")
	private Date dov;
	@Column(name = "prescription")
	private String prescription;
	
	

	


	public PatientModel() {
		
	}
	
	
	public PatientModel(String name, String visited_doc, Date dov,String prescription) {
		super();
		this.name = name;
		this.visited_doc = visited_doc;
		this.dov = dov;
		this.prescription =prescription;
		
		
	}
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getVisited_doc() {
		return visited_doc;
	}
	public void setVisited_doc(String visited_doc) {
		this.visited_doc = visited_doc;
	}
	public Date getDov() {
		return dov;
	}
	public void setDov(Date dov) {
		this.dov = dov;
	}
	
	public String getPrescription() {
		return prescription;
	}


	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	

	
	
	
}
