package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	private int id;
	private String name;
	private String gender;
	private String country;
	private int allocated_room_no;
	//private LocalDateTime checkInTime;
	private String check_in_time;
	private double deposit;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(int id, String name, String gender, String country, int allocated_room_no, String check_in_time,
			double deposit) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.country = country;
		this.allocated_room_no = allocated_room_no;
		this.check_in_time = check_in_time;
		this.deposit = deposit;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getAllocated_room_no() {
		return allocated_room_no;
	}
	public void setAllocated_room_no(int allocated_room_no) {
		this.allocated_room_no = allocated_room_no;
	}
	public String getCheck_in_time() {
		return check_in_time;
	}
	public void setCheck_in_time(String check_in_time) {
		this.check_in_time = check_in_time;
	}
	public double getDeposit() {
		return deposit;
	}
	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", gender=" + gender + ", country=" + country
				+ ", allocated_room_no=" + allocated_room_no + ", check_in_time=" + check_in_time + ", deposit="
				+ deposit + "]";
	}
	
}