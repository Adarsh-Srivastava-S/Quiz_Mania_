package com.exam.service;

import com.exam.model.feedback.Feedback;

import java.util.Set;

public interface FeedbackService {
    public Feedback addFeedback(Feedback feedback);
//    public Feedback updateFeedback(Feedback feedback);

    public Feedback getFeedback(Long fid);
    public Set<Feedback> getFeedbacks();
}
