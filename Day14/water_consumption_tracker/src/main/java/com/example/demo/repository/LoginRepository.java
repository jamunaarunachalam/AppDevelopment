package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.LoginEntity;


public interface LoginRepository extends JpaRepository<LoginEntity, Integer>{

}
