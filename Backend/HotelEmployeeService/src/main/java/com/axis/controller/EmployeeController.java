package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Employee;
import com.axis.service.EmployeeService;

@RestController
@RequestMapping("/hotel/employee")
@CrossOrigin(origins="*")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/greet")
	public String greet() {
		return employeeService.greet();
	}
	
	@PostMapping("/addEmp")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		Employee employee2 = employeeService.addEmployee(employee);
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}
	
	@GetMapping("/getAllEmployees")
	public ResponseEntity<List<Employee>> getAllEmployees(){
		List<Employee> customers = employeeService.getAllEmployees();
		return new ResponseEntity<List<Employee>>(customers, HttpStatus.OK);
	}
	
	@GetMapping("/getEmployee/{id}")
	public ResponseEntity<Employee> getEmployeesById(@PathVariable int id){
		Employee employees = employeeService.getEmployeeById(id);
		return new ResponseEntity<Employee>(employees, HttpStatus.OK);
	}
	@PutMapping("/updateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employee){
		return new ResponseEntity<Employee>(employeeService.updateEmployee(id, employee),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteEmployee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable int id){
		return new ResponseEntity<String>(employeeService.deleteEmployee(id),HttpStatus.OK);
	}

}
