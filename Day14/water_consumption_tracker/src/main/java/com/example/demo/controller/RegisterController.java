package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.RegisterEntity;
import com.example.demo.service.RegisterImplementation;
import com.example.demo.service.RegisterInterface;
@RestController
@CrossOrigin
public class RegisterController {
		@Autowired
		private RegisterImplementation ri;
		@GetMapping("/getRegister")
		public List<RegisterEntity> getRegister()
		{
			return ri.getRegister();
		}
		
		@PostMapping("/postRegister")
		public void postRegister(@RequestBody RegisterEntity re)
		{
			 ri.postRegister(re);
		}
		@DeleteMapping("/deleteRegister")
		public void deleteRegister(int id)
		{
			ri.deleteRegister(id);
		}
		@PutMapping("/updateRegister/{id}")
		public void updateRegister(@RequestBody RegisterEntity re,@PathVariable int id)
		{
		    re.setId(id);
			ri.updateRegister(re);
		}
		
		

	}


