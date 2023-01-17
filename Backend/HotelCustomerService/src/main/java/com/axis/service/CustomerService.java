package com.axis.service;

import java.util.List;

import com.axis.customerdto.CustomerDto;
import com.axis.model.Customer;


public interface CustomerService {
	
	public String greet();
	public CustomerDto addCustomer(CustomerDto customerdto);
	public List<CustomerDto> getAllCustomers();
	public Customer getCustomerById(int id);
	//public CustomerDto updateCustomer(int id,CustomerDto customerdto);
	public Customer updateCustomer(int id,Customer customer);
	public String deleteCustomer(int id);

}
