package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.RegisterEntity;

public interface RegisterInterface {
	
	public List<RegisterEntity> getRegister();
	public void postRegister(RegisterEntity re);
	public String deleteRegister(int id);
	public RegisterEntity updateRegister(RegisterEntity re);

}
