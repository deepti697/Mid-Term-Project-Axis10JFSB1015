package com.axis.roomdto;

import jakarta.persistence.Id;

public class RoomDto {
	
	@Id
	private int room_no;
	private String avalibility;
	private String bed;
	private String cleaning_status;
	private double room_price;
	public RoomDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RoomDto(int room_no, String avalibility, String bed, String cleaning_status, double room_price) {
		super();
		this.room_no = room_no;
		this.avalibility = avalibility;
		this.bed = bed;
		this.cleaning_status = cleaning_status;
		this.room_price = room_price;
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
	public String getBed() {
		return bed;
	}
	public void setBed(String bed) {
		this.bed = bed;
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
	@Override
	public String toString() {
		return "RoomDto [room_no=" + room_no + ", avalibility=" + avalibility + ", bed=" + bed + ", cleaning_status="
				+ cleaning_status + ", room_price=" + room_price + "]";
	}
	
}
