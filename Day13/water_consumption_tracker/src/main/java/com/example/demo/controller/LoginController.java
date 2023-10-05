package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.LoginEntity;
import com.example.demo.service.LoginImplementation;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	private LoginImplementation li;
	@GetMapping("/getLogin")
	public List<LoginEntity> getLogin()
	{
		return li.getLogin();
	}
	
	@PutMapping("/putLogin/{loginid}")
	public void updateLogin(@RequestBody LoginEntity le,@PathVariable int loginid)
	{
		le.setLoginid(loginid);
		li.updateLogin(le);
	}
	@PostMapping("/PostLogin")
	public void postLogin(@RequestBody LoginEntity le)
	{
		li.postLogin(le);
	}
	@DeleteMapping("/deleteLogin")
	public void deleteLogin(int loginid)
	{
		li.deleteLogin(loginid);
	}
	

}
