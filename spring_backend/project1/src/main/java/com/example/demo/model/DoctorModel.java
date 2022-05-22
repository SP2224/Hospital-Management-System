package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doc_info")

public class DoctorModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "doc_name")
	private String name;
	@Column(name ="doc_age")
	private int age;
	@Column(name = "doc_gender")
	private String gender;
	@Column(name = "specialist_field")
	private String specialist_field;
	@Column(name = "noofpatientsattended")
	private int noofpatientsattended;
	
	

	public DoctorModel() {
		
	}
	
	public DoctorModel( String name, int age, String gender, String specialist_field, int noofpatientsattended) {
		super();
		
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.specialist_field = specialist_field;
		this.noofpatientsattended = noofpatientsattended;
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
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getSpecialist_field() {
		return specialist_field;
	}
	public void setSpecialist_field(String specialist_field) {
		this.specialist_field = specialist_field;
	}
	public int getNoofpatientsattended() {
		return noofpatientsattended;
	}

	public void setNoofpatientsattended(int noofpatientsattended) {
		this.noofpatientsattended = noofpatientsattended;
	}
}
