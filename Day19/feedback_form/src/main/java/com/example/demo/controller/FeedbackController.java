package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.service.FeedbackService;
@CrossOrigin
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	private FeedbackService fs;
	@Autowired
	public FeedbackController(FeedbackService fs) {
		this.fs=fs;
	}
	@PostMapping("/submit")
	public ResponseEntity <FeedbackResponse> submitfeedback(@RequestBody FeedbackRequest feedbackRequest) 
	{
		FeedbackResponse feedbackresponse=fs.submitfeedback(feedbackRequest);
		return ResponseEntity.ok(feedbackresponse);
	}
	
}
