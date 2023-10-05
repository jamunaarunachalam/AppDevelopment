package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RegisterEntity;
import com.example.demo.repository.RegisterRepository;

@Service
public class RegisterImplementation implements RegisterInterface {
	@Autowired
	private RegisterRepository rr;
	
	public List<RegisterEntity> getRegister()
	{
		return rr.findAll();
	}
	public void postRegister(RegisterEntity re)
	{
		 rr.save(re);
	}
	public String deleteRegister(int id)
	{
		rr.deleteById(id);
		return "deleted" ;
	}
	public RegisterEntity updateRegister(RegisterEntity re)
	{
		return rr.save(re);
	}
		

}
