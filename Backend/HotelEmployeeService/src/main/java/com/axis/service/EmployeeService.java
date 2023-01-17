package com.axis.service;

import java.util.List;

import com.axis.model.Employee;

public interface EmployeeService {
	
	public String greet();
	public Employee addEmployee(Employee employee);
	public List<Employee> getAllEmployees();
	public Employee getEmployeeById(int id);
	public Employee updateEmployee(int id,Employee employee);
	public String deleteEmployee(int id);

}
