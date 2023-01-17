package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Rooms")
public class Room {
	
	@Id
	private int room_no;
	private String avalibility;
	private String cleaning_status;
	private double room_price;
	private String bed;
	public Room(int room_no, String avalibility, String cleaning_status, double room_price, String bed) {
		super();
		this.room_no = room_no;
		this.avalibility = avalibility;
		this.cleaning_status = cleaning_status;
		this.room_price = room_price;
		this.bed = bed;
	}
	public Room() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getRoom_no() {
		return room_no;
	}
	public void setRoom_no(int room_no) {
		this.room_no = room_no;
	}
	public String getAvalibility() {
		return avalibility;
	}
	public void setAvalibility(String avalibility) {
		this.avalibility = avalibility;
	}
	public String getCleaning_status() {
		return cleaning_status;
	}
	public void setCleaning_status(String cleaning_status) {
		this.cleaning_status = cleaning_status;
	}
	public double getRoom_price() {
		return room_price;
	}
	public void setRoom_price(double room_price) {
		this.room_price = room_price;
	}
	public String getBed() {
		return bed;
	}
	public void setBed(String bed) {
		this.bed = bed;
	}
	@Override
	public String toString() {
		return "Room [room_no=" + room_no + ", avalibility=" + avalibility + ", cleaning_status=" + cleaning_status
				+ ", room_price=" + room_price + ", bed=" + bed + "]";
	}
	
	
}
