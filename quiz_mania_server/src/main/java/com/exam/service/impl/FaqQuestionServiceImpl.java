package com.exam.service.impl;

//import com.exam.model.OpenView.DispQuest;

import com.exam.model.faq.FaqQuestion;
import com.exam.model.feedback.Feedback;
import com.exam.model.feedback.FeedbackQuestion;
import com.exam.repo.FaqQuestionRepository;
import com.exam.service.FaqQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class FaqQuestionServiceImpl implements FaqQuestionService {
    @Autowired
    FaqQuestionRepository faqQuestionRepository;

    @Override
    public FaqQuestion addFaqQuestion(FaqQuestion faqQuestion) {
        return this.faqQuestionRepository.save(faqQuestion);
    }

    @Override
    public FaqQuestion getFaqQuestion(Long faqQuestId) {
        return this.faqQuestionRepository.findById(faqQuestId).get();
    }

    @Override
    public FaqQuestion updateFeedbackQuestion(FaqQuestion faqQuestion) {
        return this.faqQuestionRepository.save(faqQuestion);
    }

    @Override
    public List<FaqQuestion> getAllFaqQuestion(Integer pageNumber, Integer pageSize) {
        Pageable p = (Pageable) PageRequest.of(pageNumber, pageSize);
        Page<FaqQuestion> pageFaq = this.faqQuestionRepository.findAll(p);
        List<FaqQuestion> allFaq = pageFaq.getContent();
        return allFaq;

    }

    @Override
    public Set<FaqQuestion> findAllFaqQuestion() {
        return new HashSet<>(this.faqQuestionRepository.findAll());
    }
}
