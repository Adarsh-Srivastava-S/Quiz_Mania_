package com.exam.service;

import com.exam.model.feedback.Feedback;
import com.exam.model.feedback.FeedbackQuestion;

import java.util.Set;

public interface FeedbackQuestionService {
    public FeedbackQuestion addFeedbackQuestion(FeedbackQuestion feedbackQuestion);
    public FeedbackQuestion updateFeedbackQuestion(FeedbackQuestion feedbackQuestion);
    public FeedbackQuestion getFeedbackQuestion(Long feedId);

    public Set<FeedbackQuestion> getQuestionsOfFeedback(Feedback feedback);
}
