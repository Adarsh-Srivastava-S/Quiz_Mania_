package com.exam.service;

//import com.exam.model.OpenView.DispQuest;

import com.exam.model.faq.FaqQuestion;
import com.exam.model.feedback.FeedbackQuestion;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

public interface FaqQuestionService {
    public FaqQuestion addFaqQuestion(FaqQuestion faqQuestion);

    public FaqQuestion getFaqQuestion(Long faqQuestId);

    public FaqQuestion updateFeedbackQuestion(FaqQuestion faqQuestion);

    public Set<FaqQuestion> findAllFaqQuestion();

    public List<FaqQuestion> getAllFaqQuestion(Integer pageNumber, Integer pageSize);
}
