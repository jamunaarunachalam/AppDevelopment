package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.entity.FeedbackEntity;
import com.example.demo.repository.FeedbackRepository;
@Service
public class FeedbackService {
	
	private final FeedbackRepository fb;
	@Autowired
	public FeedbackService(FeedbackRepository fb)
	{
		this.fb=fb;
	}
	
	public FeedbackResponse submitfeedback(FeedbackRequest feedbackRequest) {
		FeedbackEntity feedbackEntity= new FeedbackEntity();
		feedbackEntity.setName(feedbackRequest.getName());
		feedbackEntity.setEmail(feedbackRequest.getEmail());
		feedbackEntity.setFeedbacktext(feedbackRequest.getFeedbacktext());
		
		FeedbackEntity savedfeedback=fb.save(feedbackEntity);
		FeedbackResponse feedbackresponse=new FeedbackResponse();
		feedbackresponse.setId(savedfeedback.getId());
		feedbackresponse.setName(savedfeedback.getName());
		feedbackresponse.setEmail(savedfeedback.getEmail());
		feedbackresponse.setFeedbacktext(savedfeedback.getFeedbacktext());
		return feedbackresponse;
		
				
		
	}

}
