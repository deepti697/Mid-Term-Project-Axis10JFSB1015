package com.axis.exception;

public class RoomNotFoundException extends RuntimeException {
	String msg;

	public RoomNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}
