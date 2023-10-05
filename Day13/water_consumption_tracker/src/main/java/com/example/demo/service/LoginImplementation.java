package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.LoginEntity;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginImplementation implements LoginInterface {
	@Autowired
	private LoginRepository lr;
	public List<LoginEntity> getLogin()
	{
		return lr.findAll();
	}
	public void postLogin(LoginEntity le)
	{
		lr.save(le);
	}
	public void deleteLogin(int loginid)
	{
		lr.deleteById(loginid);
	}
	public LoginEntity updateLogin(LoginEntity le)
	{
		return lr.save(le);
		
	}
	
}
