package com.axis.exception;

public class InvalidpriceException extends RuntimeException{

	String msg;

	public InvalidpriceException(String msg) {
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
