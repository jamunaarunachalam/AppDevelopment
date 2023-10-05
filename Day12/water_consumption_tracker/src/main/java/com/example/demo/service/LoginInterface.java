package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.LoginEntity;

public interface LoginInterface {
	public LoginEntity updateLogin(LoginEntity le);
	public void deleteLogin(int loginid);
	public List<LoginEntity> getLogin();
	public void postLogin(LoginEntity le);
	

}
