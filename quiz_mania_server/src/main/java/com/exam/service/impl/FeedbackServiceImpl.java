package com.exam.service.impl;

import com.exam.model.User;
import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import com.exam.repo.FeedbackRepository;
import com.exam.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;



    @Override
    public Feedback addFeedback(Feedback feedback) {
        return this.feedbackRepository.save(feedback);
    }
    @Override
    public Feedback getFeedback(Long fId) {
        return this.feedbackRepository.findById(fId).get();
    }
    @Override
    public Set<Feedback> getFeedbacks(){
        return new HashSet<>(this.feedbackRepository.findAll());
    }
    @Override
    public Set<Feedback> getFeedback(User user){
        return new HashSet<>(this.feedbackRepository.findAll());
    }


}
