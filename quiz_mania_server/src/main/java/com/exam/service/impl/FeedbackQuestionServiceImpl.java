package com.exam.service.impl;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.model.feedback.Feedback;
import com.exam.model.feedback.FeedbackQuestion;
import com.exam.repo.FeedbackQuestionRepository;
import com.exam.service.FeedbackQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FeedbackQuestionServiceImpl implements FeedbackQuestionService {
   @Autowired
    private FeedbackQuestionRepository feedbackQuestionRepository;
   @Override
   public FeedbackQuestion addFeedbackQuestion(FeedbackQuestion feedbackQuestion)
   {
       return this.feedbackQuestionRepository.save(feedbackQuestion);
   }
    @Override
    public FeedbackQuestion getFeedbackQuestion(Long feedId) {
        return this.feedbackQuestionRepository.findById(feedId).get();
    }
    @Override
    public FeedbackQuestion updateFeedbackQuestion(FeedbackQuestion feedbackQuestion)
    {
        return this.feedbackQuestionRepository.save(feedbackQuestion);
    }

    @Override
    public Set<FeedbackQuestion> getQuestionsOfFeedback(Feedback feedback) {
        return this.feedbackQuestionRepository.findByFeedback(feedback);
    }
}
