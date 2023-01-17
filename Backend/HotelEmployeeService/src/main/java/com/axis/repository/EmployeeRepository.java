package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
